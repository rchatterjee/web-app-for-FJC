import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;

  constructor(private http: Http) { }

//register to backend
  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/register', user,{headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers}).map(res => res.json());
  }

  getProfile(){
  	let headers = new Headers();
  	this.loadToken();
    console.log(this.authToken);
  	headers.append('Authorization', this.authToken);
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('http://localhost:3000/users/profile',{headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
  	localStorage.setItem('id_token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
    // console.log(this.authToken);
  	this.user = user;
  }

  //fetch token from local storage
  loadToken(){
    const prefix = "JWT ";
  	const token = localStorage.getItem('id_token');
  	var t = token.substring(3);
    t = prefix.concat(t);
    this.authToken = t;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }
}
