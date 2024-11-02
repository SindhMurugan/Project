import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { cardItem, getData, getLogged } from '../../store/action/app.selectors';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../module/product-interface';
import { MatIconModule } from '@angular/material/icon';
import { addToCard, DescProduct, userDeatils } from '../../store/action/app.actions';
import { CommonService } from '../../module/service/common.service';
import { currentUser } from '../../store/action/app.selectors';

@Component({
  selector: 'app-products-desc',
  standalone: true,
  imports: [MatButtonModule , CurrencyPipe , MatExpansionModule , CommonModule , MatIconModule],
  templateUrl: './products-desc.component.html',
  styleUrl: './products-desc.component.css'
})
export class ProductsDescComponent {

    getValue :ProductInterface|any;
    userId:any
    // loggedValue:boolean|any

    constructor(private store:Store<AppState> , private service:CommonService){
      this.store.select(getData).subscribe((value:any) => {
        this.getValue = value
      })

      this.service.userMailId$.subscribe(val => this.userId = val)



      // this.store.select(getLogged).subscribe((value:any) => {
      //   this.loggedValue = value
      // })
    }

    backToSmart(){
      this.store.dispatch(DescProduct({product:{}}))
    }

    addedToCard(product:ProductInterface):void{
      this.store.dispatch(addToCard({card:product}))

      // let usermail:String =''

    //   this.commonService.checkPhoneNo(phoneNo).subscribe(val => {
    //   console.log("yyyyyyyyy" , value)
    //   usermail = value['mail']
    // })

    alert(this.userId)

    const obj ={
      id:this.userId,
      cardItem:product
    }

    console.log("hhhhh" , obj)

      this.service.addItemToTable(obj).subscribe((value:any) => {
        console.log("value" , value)
        this.service.getCardItems$.next(value['data'])

      })

    }

  

}
