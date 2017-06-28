import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { ServiceOfferedComponent } from './components/service-offered/service-offered.component';
import { TourComponent } from './components//tour/tour.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TipsComponent } from './components/tips/tips.component';
import { PrepareComponent } from './components/prepare/prepare.component';
import { FaqComponent } from './components/faq/faq.component';
import { TourComponent } from './components//bronx/tour.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'service_offered', component: ServiceOfferedComponent},
  {path:'tour', component: TourComponent},
  {path:'testimonial', component: TestimonialComponent},
  {path:'tips', component: TipsComponent},
  {path:'prepare', component: PrepareComponent},
  {path:'faq', component: FaqComponent},
  {path: 'bronx', component: TourComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    ServiceOfferedComponent,
    TourComponent,
    TestimonialComponent,
    TipsComponent,
    PrepareComponent,
    FaqComponent,
    bronx
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
