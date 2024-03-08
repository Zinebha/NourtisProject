import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit { 
 
 

  constructor() { 
    
    
  } 
  public ImagePath1: string = "";
  ngOnInit() { 
    this.ImagePath1 = '/assets/images/NortisLogo.png'
  } 
}





