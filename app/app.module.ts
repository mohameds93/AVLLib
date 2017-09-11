import { NgModule } from '@angular/core';
import {Ng2MDFValidationMessagesModule} from 'ng2-mdf-validation-messages';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing'
import { BrowserModule } from '@angular/platform-browser';

import {AuthenticationService} from './Service/authentication.service'
import{ DetailCodeService} from './Service/detailcode.service'
import {UserService} from './Service/user.service'
import {ZoneService} from './Service/zonesService'


import { AppComponent }  from './app.component';
import {LoginComponent} from './Components/login.component'

@NgModule({
  imports:[ Ng2MDFValidationMessagesModule,BrowserModule,ReactiveFormsModule,HttpModule ,routing
 
  ],
  declarations: [ AppComponent,LoginComponent ],
  providers:[{ provide: APP_BASE_HREF, useValue: '/' },AuthenticationService,DetailCodeService,UserService,ZoneService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
