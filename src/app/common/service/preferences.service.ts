import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee : string = "yellow";

  public get couleurFondPreferee() : string{
    return this._couleurFondPreferee;
  }

  public set couleurFondPreferee(nouvelleCouleur :string){
    this._couleurFondPreferee = nouvelleCouleur;
    localStorage.setItem('couleurFond',this._couleurFondPreferee);
  }
  //...

  constructor() {
    let couleurFond = localStorage.getItem('couleurFond');
    this._couleurFondPreferee = couleurFond?couleurFond:'yellow';
   }
}
