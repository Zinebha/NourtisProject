import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit {
  
  constructor(){

  }
  ImagePath3: string = "";
  ngOnInit()  {
    this.ImagePath3 = '/assets/images/3.jpg';
  
    
  }
}
