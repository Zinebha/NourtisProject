import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrl: './page6.component.css'
})
export class Page6Component implements OnInit {

  constructor(){

  }

  ImagePath6: string = "";
  ngOnInit()  {
    this.ImagePath6 = '/assets/images/6.jpg';
  
    
  }

}
