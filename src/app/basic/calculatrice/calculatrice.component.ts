import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  a : number;
  b : number; 
  res : number;

  onAddition(){
    this.res = Number(this.a) + Number(this.b);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
