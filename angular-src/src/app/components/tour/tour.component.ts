import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private authService:AuthService,
  			  private router: Router,
  			  private flashMessage: FlashMessagesService,
  			  private route: ActivatedRoute) 
  			  {
  			  	 this.route.fragment.subscribe ( f => {
         const element = document.querySelector ( "#" + f )
         if ( element ) element.scrollIntoView ( element )
     });
  			   }

           navigate() {
              this.router.navigate(["bronx_page"])
              this.router.navigate(["brooklyn_page"])
              this.router.navigate(["queens_page"])
              this.router.navigate(["manhattan_page"])


           }

  ngOnInit() {}

}