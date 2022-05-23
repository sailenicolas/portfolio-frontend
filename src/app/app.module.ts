import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpclientInterceptor } from './interceptors/httpclient.interceptor';
import { AuthService } from './services/auth.service';
import { CurrentToken } from './models/current-token';
import { UnauthGuard } from './guards/unauth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { DashComponent } from './components/dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MaterialAppModule } from './modules/materialapp/material-app.module';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProgressComponent } from './components/shared/progress/progress.component';
import { PortfolioEditForm } from './components/portfolio/portfolio-edit-form/portfolio-edit-form.component';
import { PortfolioAddForm } from './components/portfolio/portfolio-add-form/portfolio-add-form.component';
import { SharedTitleComponent } from './components/shared/shared-title/shared-title.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './components/portfolio/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ListEducationComponent } from './components/list-education/list-education.component';
import { ListExperienciesComponent } from './components/list-experiencies/list-experiencies.component';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		LoginComponent,
		PortfolioComponent,
		HeaderComponent,
		DashComponent,
		FooterComponent,
		SoftSkillsComponent,
		ProjectsComponent,
		ProgressComponent,
		PortfolioEditForm,
		PortfolioAddForm,
		SharedTitleComponent,
		HomeComponent,
		AboutMeComponent,
		ListEducationComponent,
		ListExperienciesComponent,
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
		LayoutModule,
		MatSelectModule,
		MatDatepickerModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpclientInterceptor,
			multi: true,
		},
		AuthGuard,
		AuthService,
		CurrentToken,
		UnauthGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
