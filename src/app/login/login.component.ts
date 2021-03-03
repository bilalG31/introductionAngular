import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login'
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/service/login.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  message : string;

  onLogin(){
    //this.message="donnees saisies=" + JSON.stringify(this.login);
    this._loginService.postLogin(this.login)
        .subscribe(
          (loginResponse :LoginResponse) => { this.message=loginResponse.message;
                                              console.log(loginResponse.token);
                                             },
          (err)=>{this.message="error"}
        )
  }

  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
  }

}
