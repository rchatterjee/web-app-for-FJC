import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,
  			  private router: Router,
  			  private flashMessage: FlashMessagesService) { }

  home = 'Home';
  srvo = 'Service Offered';
  fjc= 'FJC Virtual Tour';
  tech = 'Tech Safety Tips';
  testimonial = 'Testimonial';
  prepare = 'Prepare for your visit';
  faq = 'FAQ';

  ngOnInit() {
  }

  onLogoutClick(){
  	this.authService.logout();
  	this.flashMessage.show('You are logged out', {
  		cssClass:'alert-success',
  		timeout: 3000
  	});
  	this.router.navigate(['/login']);
  	return false;
  };

  exit(){
    window.open("http://weather.com", "_newtab");
    window.location.replace('http://google.com');
  };


}

