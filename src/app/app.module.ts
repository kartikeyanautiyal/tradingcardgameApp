import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { Router, RouterModule } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule,
    RouterModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
