import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component implements OnInit {

  constructor(){

  }
ImagePath4 : String = "";
ngOnInit(){
  this.ImagePath4 = '/assets/images/4.jpg'
  
}
}
