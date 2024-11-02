import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { ProductInterface } from '../product-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakeBarComponent } from '../snake-bar/snake-bar.component';
import { AuthService } from '../service/auth.service';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
// import { getLogged } from '../../store/action/app.selector';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

export interface responce {
  categoryId:number,categoryName:string}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  items =['eggs , meat and fish' , 'neupass' , 'ayurveda' , 'buy more save more' , 'deals of the week' , 'combo store']
  products:ProductInterface[]=[]
  displayedItems:ProductInterface[]=[]
  currentIndex:number =1;
  itemPerPage:number =4;
  hasMoreItems:boolean=true;
  previousItems:boolean = true;
  endIndex:number =0
  private _snackBar = inject(MatSnackBar);
  duration:number =3
  loggedIn:boolean = false;
  phoneNo = this.commonService.alreadyLoggedIn$

  constructor(private commonService:CommonService , private auth:AuthService , private store:Store<AppState> , private http:HttpClient,private router:Router){

    // this.store.select(getLogged).subscribe(val => {
    //   this.loggedIn = val ? val:false
     
    // })

  //  let obj ={}

    this.http.get<[{}]>("assets/product.json").pipe(map((value:any) => {
      return value.data.map((val:ProductInterface) => {
          return {categoryId:val.categoryId,
          productName:val.productName} })

          // console.log(getData , "llllllllll")
      
    })).subscribe(val => console.log("sssssss" , val))

  }

  ngOnInit(): void {
    this.getData()
  }


  getData():void{

    this.commonService.fetchProducts().subscribe(val =>{
      this.products = val.data;
      this.updatePage()

      

     
    } )



  }

  previousPage():void{
      this.currentIndex--;
      this.updatePage();
      this.previousItems = this.currentIndex < 2;
      
  }

  nextPage(){
      this.currentIndex++;
      this.updatePage();
      this.previousItems = false
  }


  updatePage():void{
    const startIndex = (this.currentIndex-1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;
    this.displayedItems  = this.products.slice(startIndex, endIndex);
    this.hasMoreItems = this.currentIndex < this.products.length;
   

  }

  itemAdded():void{

    // alert(this.auth.loggedIn())

    
    if(this.auth.loggedIn()){
      this._snackBar.openFromComponent(SnakeBarComponent , {
        duration:this.duration *1000
      })

    }
    else{
      // alert("please Login first")
      this.router.navigateByUrl('/menu/home/login')
      
    }
    

  }

}
