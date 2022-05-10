import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CardComponent } from './components/card/card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ListComponent } from './components/shared/list/list.component';
import { MaterialAppModule } from './modules/materialapp/material-app.module';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProgressComponent } from './components/shared/progress/progress.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		LoginComponent,
		CardComponent,
		PortfolioComponent,
		HeaderComponent,
		DashComponent,
		FooterComponent,
		ListComponent,
		SoftskillsComponent,
		ProjectsComponent,
		ProgressComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialAppModule,
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
		MatButtonToggleModule,
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
