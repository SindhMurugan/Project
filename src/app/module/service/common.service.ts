import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInterface } from '../product-interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  alreadyLoggedIn$ = new BehaviorSubject<boolean>(false);
  userMailId$ = new BehaviorSubject<Object>({})
  getCardItems$ = new BehaviorSubject<any>('')

  

  constructor( private http:HttpClient) { }

  checkPhoneNo(number:Number):Observable<any>{
 
    // return this.http.post("http://127.0.0.1:5000/sendOtp" , number)
    return this.http.post("http://localhost:3000/checkPhoneNo" , {"phoneNo":number})
  }

  addToTable(data:object):Observable<any>{
    alert("added to the table")
    // return this.http.post("http://127.0.0.1:5000/addToTable" , data)
    return this.http.post("http://localhost:3000/addUserDeatils" , data)
  }


  fetchProducts():Observable<any>{
    return this.http.get("assets/product.json")
  }

  addItemToTable(product:Object):Observable<object>{
    return this.http.post("http://localhost:3000/addToCard" , product)
  }
}
