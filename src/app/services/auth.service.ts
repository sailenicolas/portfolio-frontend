import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CurrentUser } from '../class/currentuser';
import { LoginForm } from '../class/loginform';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		public currentUser: CurrentUser,
		private http: HttpClient,
		public jwtHelper: JwtHelperService,
		public router: Router
	) {}

	readonly API_VERSION = environment.apiVersion;

	login(loginForms: LoginForm): Observable<CurrentUser> {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
		};
		let params = new HttpParams({
			fromObject: {
				username: loginForms.username,
				password: loginForms.password,
			},
		});

		console.log(loginForms.username);
		return this.http.post<CurrentUser>(
			'http://localhost:8080/' + this.API_VERSION + '/login',
			params,
			options
		);
	}

	public isAuthenticated(): boolean {
		if (environment.production) {
			if (this.jwtHelper.isTokenExpired(this.currentUser.access_token)) {
				this.tokenExpiredHandler();
				return false;
			}
		}
		return true;
	}

	public tokenExpiredHandler() {
		sessionStorage.removeItem('access_token');
		if (this.jwtHelper.isTokenExpired(this.currentUser.refresh_token)) {
			sessionStorage.clear();
		}
	}

	logout($event: MouseEvent) {
		if (this.isAuthenticated()) {
			sessionStorage.clear();
		}
		this.router.navigate(['/']);
	}
}
