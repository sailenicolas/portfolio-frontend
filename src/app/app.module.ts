import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import {AuthGuard} from "./guard/auth.guard";
import { CardComponent } from './components/card/card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    UserComponent,
    CardComponent,
    PortfolioComponent,
    HeaderComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatInputModule,
		ReactiveFormsModule,
		MatSidenavModule,
		MatGridListModule,
		MatProgressSpinnerModule,
		MatButtonModule,
	],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
