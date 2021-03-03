import { Component, OnInit } from '@angular/core';
import { DeviseService} from '../common/service/devise.service'
import { Devise} from '../common/data/devise'

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant : number ;
  codeDeviseSource : string ;
  codeDeviseCible : string ;
  montantConverti : number ;

  listeDevises : Devise[];

  onConvertir(){
        console.log("debut de onConvertir")
        this._deviseService.convertirDevise(this.montant,
                                            this.codeDeviseSource,
                                            this.codeDeviseCible)
                .subscribe(
                   (res :number) => { this.montantConverti = res;
                                      console.log("resultat obtenu en différé")} ,
                   (err) => { console.log("error:"+err)}
                );
        console.log("suite de onConvertir")
  }

  constructor(private _deviseService : DeviseService) { }

  initListeDevises(tabDevises : Devise[]){
    this.listeDevises = tabDevises;
    this.codeDeviseSource = tabDevises[0].code;
    this.codeDeviseCible = tabDevises[0].code;
  }

  ngOnInit(): void {
    this._deviseService.recupererDevises()
         .subscribe(
           (tabDev : Devise[])=>{ this.initListeDevises(tabDev); },
           (err) => { console.log("error:"+err)}
         );
  }

}
