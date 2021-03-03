import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse} from '../data/loginResponse'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public postLogin(login: Login): Observable<LoginResponse>{
    //let urlWs = "http://localhost:8282/login-api/public/auth";
    let urlWs = "./login-api/public/auth"; //via proxy.config.json
    return this.http.post<LoginResponse>(urlWs,
                                        login,
                                        {headers: this._headers });
  }
}
