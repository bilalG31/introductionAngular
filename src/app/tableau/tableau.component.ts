import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  tabDevise : Devise[];
  deviseSelec : Devise;

  constructor(private _devSer : DeviseService) { }

  initTabDevise( tabDev : Devise[]){
    this.tabDevise = tabDev;
  }

  ngOnInit(): void {
    this._devSer.recupererDevises()
         .subscribe(
           (tabDev : Devise[])=>{ this.initTabDevise(tabDev); },
           (err) => { console.log("error:"+err)}
         );
  }

}
