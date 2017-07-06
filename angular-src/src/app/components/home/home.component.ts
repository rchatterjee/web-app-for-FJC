import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


	caption= 'FIGHT AGAINST VIOLENCE';

	subCaptionOne = 'Your Virtual Ally';
	detailOne = 'At the click of a button, get answers to all of your questions, tips on how to safely use technology, and information on the resources available to you.';

	subCaptionTwo = 'Your Safe Harbor';
	detailTwo = 'Services are free and available to all victims. You can get help regardless of your immigration status or the language you speak.';


	subCaptionThree = 'Walk-ins Welcome';
	detailThree = 'Our door is always open for you,no appointment necessary. When you feel ready, simply walk in anytime, Monday through Friday, between 9:00 a.m. - 5:00 p.m.';

	footerOne = 'ABOUT COMPANY';
	footerTwo = 'SOCIAL PRESENCE';
	footerThree = 'PHYSICAL LOCATION';




  constructor() { }

  ngOnInit() {
  }

}
