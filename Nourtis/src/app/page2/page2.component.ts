import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit {

  constructor(){

  }
  ImagePath2: string = "";
ngOnInit()  {
  this.ImagePath2 = '/assets/images/2.jpg'

  
}
}
