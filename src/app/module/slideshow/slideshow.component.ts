import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit  {
  count =0
  images =['assets/slideshow/img1.webp' , 'assets/slideshow/img2.webp' , 'assets/slideshow/img3.webp']
  image :string =this.images[this.count]
  interval:any



  constructor(){
    this.startInterval()
    // setTimeout(() => {
    //   console.log("timeout")
    //   clearInterval(this.interval)
    //   this.startInterval()
    //   this.count =0

    // } , 6000)
  }
  ngOnInit(): void {
    
  }


  startInterval(){
   this.interval = setInterval(() => {
      this.count +=1
      this.image = this.images[this.count]
      this.count == 2 ? this.count =0 :this.count
    } , 2000)
  }

}
