import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Observable, Subscriber } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { cardItem } from '../../store/action/app.selectors';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
  
})
export class ToolbarComponent implements OnDestroy{

  phoneNo = this.commonService.alreadyLoggedIn$
  data = new Date()
  interval:any
  wishList:ProductInterface[]=[]
  getWishListLen:number=0

  date$ = new Observable((observer:Subscriber<string>)=> {
   setInterval(()=>  observer.next(new Date().toString()) , 1000)

  })


  



  

  constructor(private commonService:CommonService , private store:Store<AppState> ){
    this.interval = setInterval(()=> this.data = new Date() , 1000)
    this.phoneNo.subscribe(value => console.log("oooooooo" , value))


    store.select(cardItem).subscribe((value:any) => {
      console.log( this.wishList , ' this.wishList')
      this.wishList.push(value)
    })

    commonService.getCardItems$.subscribe((value) => {
      console.log("66666666" , value)
      this.getWishListLen = value.length
    })

    // console.log("uuuuuuuu")

    

    

   
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
  }







  
//  openLogin:boolean=false
//  @Output() emitLoginValue = new EventEmitter<boolean>()

//   openLoginscreen():void{
//     this.openLogin = !this.openLogin
//     this.emitLoginValue.emit( this.openLogin)

//   }

}


