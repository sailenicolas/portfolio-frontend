import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { CardComponent } from './components/card/card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpclientInterceptor } from './interceptors/httpclient.interceptor';
import { AuthService } from './services/auth.service';
import { CurrentUser } from './class/currentuser';
import { UnauthGuard } from './guards/unauth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { MatCardModule } from '@angular/material/card';
import { DashComponent } from './components/dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ExperienciesComponent } from './components/experiencies/experiencies.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		LoginComponent,
		UserComponent,
		CardComponent,
		PortfolioComponent,
		HeaderComponent,
		DashComponent,
		FooterComponent,
  ExperienciesComponent,
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
		FormsModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: request => {
					if (request != undefined && request.url.includes('foo')) {
						return localStorage.getItem('access_token_foo');
					}
					return localStorage.getItem('access_token');
				},
				allowedDomains: ['localhost'],
				disallowedRoutes: ['http://example.com/examplebadroute/'],
			},
		}),
		MatCardModule,
		LayoutModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpclientInterceptor,
			multi: true,
		},
		AuthGuard,
		AuthService,
		CurrentUser,
		UnauthGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
