import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class AuthService {


    loggedIn():boolean{
        return !!localStorage.getItem("loggedIn")
    }

    logIn(args:boolean):void{
        localStorage.setItem("loggedIn" , JSON.stringify(args))
    }

    logOut():void{
        localStorage.removeItem("loggedIn")
    }
}