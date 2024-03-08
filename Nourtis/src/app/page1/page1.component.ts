import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit { 
  
  

  constructor() { 
    
    
  } 
  
  ImagePath: string = "";
  ImagePath1: string = "";
  ngOnInit() { 
    this.ImagePath = '/assets/images/1.jpg'
    this.ImagePath1 = '/assets/images/NortisLogo.png'
  } 
}
