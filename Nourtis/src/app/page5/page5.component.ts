import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrl: './page5.component.css'
})
export class Page5Component implements OnInit {

  constructor(){

  }

  ImagePath5: string = "";
  ngOnInit()  {
    this.ImagePath5 = '/assets/images/5.jpg';
  
    
  }
}
