import { Component } from '@angular/core';
import { CommonService } from '../../module/service/common.service';
import { ProductInterface } from '../../module/product-interface';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { authAction } from '../../store/action/action-types';
// import { product } from '../../interface.model';
import { Store } from '@ngrx/store';

import { DescProduct } from '../../store/action/app.actions';
import { AppState } from '../../store/app.state';
import { getData } from '../../store/action/app.selectors';
// import { AppState } from '../../store/action/app.reducer';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [MatCardModule , CurrencyPipe , NgForOf , MatButtonModule,MatIconModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  products:ProductInterface[]=[]
  constructor(private commonService:CommonService , private router:Router , private store:Store<AppState>){}
  ngOnInit(): void {
    this.getData()
   
    
  }


  getData():void{

    this.commonService.fetchProducts().subscribe(val =>{
      this.products = val.data;

      console.log(this.products , 'KKKKK')
     
    } )

  }

  viewProductDes(item:ProductInterface){
    // authAction.DescProduct({item})
    this.store.dispatch(DescProduct({
     product:item
    }))


  
    // getValue.subscribe((value) => console.log("value" , value))

    // console.log(getValue , 'llllll')
    this.router.navigateByUrl('/menu/productDesc')

  }

}
