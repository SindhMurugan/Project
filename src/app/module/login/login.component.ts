import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { OpenLogginScreen, userDeatils } from '../../store/action/app.actions';
import { CommonService } from '../service/common.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // imports:[MatCardModule],
  // standalone:true
})
export class LoginComponent {



  openBetterKnowForm:boolean = false
  showLoginIcon:boolean = false
  isPhoneNoExits:boolean =false
 
  phoneNo:any
  formsData ={
    phoneNo:0,
    email:'',
    firstName:'',
    lastName:''
  }


  constructor(private commonService:CommonService , private router:Router , private auth:AuthService , private state:Store<AppState>){}

  submitted(form:any):void{
    let {phoneNo} = form.value
    this.phoneNo = phoneNo
    // this.commonService = this.phoneNo;
    console.log("pppppppppp" , this.commonService)
   
    // this.commonService.checkPhoneNo(phoneNo)
    // this.commonService.sampleCall()
    this.commonService.checkPhoneNo(phoneNo).subscribe(val => {
      this.commonService.getCardItems$.next(val.userDeatils[0].cardItem)
    
      const result = val.output
      console.log("8888888" , val.userDeatils[0])
      this.commonService.userMailId$.next(val.userDeatils[0]._id)
      this.state.dispatch(userDeatils({user:val.userDeatils[0]}))
   
      
      if(result){
        
        this.router.navigateByUrl("/menu/home")
        this.commonService.alreadyLoggedIn$.next(result)
        this.auth.logIn(result)
        this.state.dispatch(OpenLogginScreen({loggedIn:result}))

     

      }
      else{
        this.commonService.alreadyLoggedIn$.next(result)
        this.isPhoneNoExits = result
        this.auth.logIn(result)
        this.state.dispatch(OpenLogginScreen({loggedIn:result}))
      }
    })
    this.openBetterKnowForm = true
  }

  knowBetter(form:any):void{
  
     const {email , firstName , lastName} = form.value
     this.formsData.email = email , 
     this.formsData.firstName=firstName , 
     this.formsData.lastName=lastName,
     this.formsData.phoneNo=this.phoneNo

    
    
     this.commonService.addToTable(this.formsData).subscribe({
      next:()=>{this.router.navigateByUrl('/menu/home')
        this.commonService.alreadyLoggedIn$.next(true)
        this.auth.logIn(true)
        this.state.dispatch(OpenLogginScreen({loggedIn:true}))
      },
      error:(error)=>console.log(error)
     })
     
   

  }

}
