import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay , map } from 'rxjs/operators';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
 /*
  private _devises = [
     new Devise('EUR','Euro',1.0),
     new Devise('USD','Dollar',1.1),
     new Devise('GBP','Livre',0.9),
     new Devise('JPY','Yen',123.0)
  ];

  public recupererDevises() : Observable< Devise[] > {
    return of(this._devises);
  }

  public convertirDevise(montant :number,
                        codeDeviseSource : string,
                        codeDeviseCible : string): Observable<number>{                       
    return of(montant * 2) //pré-version (simulation grossière)
            .pipe(
              delay(200) //simuler une attente de 200ms 
            );
  }

  constructor() { }

  */
 public recupererDevises() : Observable< Devise[] > {
  //let urlWs = "http://localhost:8282/devise-api/public/devise";
  let urlWs = "./devise-api/public/devise";
  //url relative qui sera préfixé en mode dev par le contenu de proxy.conf.json
  //via ng serve --proxy-config proxy.conf.json
  return this.http.get<Devise[]>(urlWs);
}

public convertirDevise(montant :number,
                      codeDeviseSource : string,
                      codeDeviseCible : string): Observable<number>{                       
    //let urlWs = `http://localhost:8282/devise-api/public/convert`+
    let urlWs = `./devise-api/public/convert`+
                `?source=${codeDeviseSource}&target=${codeDeviseCible}&amount=${montant}`;
      //url relative qui sera préfixé en mode dev par le contenu de proxy.conf.json
     //via ng serve --proxy-config proxy.conf.json
    return this.http.get<object>(urlWs).pipe(
         map( (resConv) => { return resConv['result']; })
    );
}

constructor(private http: HttpClient) { }

}
