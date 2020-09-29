import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  loggedIn: boolean = false;
  constructor() { }

  setLoginState(){
    this.loggedIn = true;
  }
}
