import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router:Router){}
  // addBlurEffect:boolean = false

  // blurBackground(value:boolean):void{
  //   this.addBlurEffect = value
  //   console.log("HHHHHHHHHH" , value)

  // }

}
