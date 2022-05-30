import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CurrentToken } from '../models/current-token';
import { LoginForm } from '../models/login-form';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		public currentToken: CurrentToken,
		private http: HttpClient,
		public jwtHelper: JwtHelperService,
		public router: Router
	) {}

	private readonly API_VERSION = environment.apiVersion;
	private readonly URL_HOST = environment.urlHost + this.API_VERSION;

	login(loginForms: LoginForm): Observable<CurrentToken> {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
		};
		let params = new HttpParams({
			fromObject: {
				username: loginForms.username,
				password: loginForms.password,
			},
		});

		return this.http.post<CurrentToken>(this.URL_HOST + '/user/login', params, options);
	}

	public isAuthenticated(): boolean {
		if (this.jwtHelper.isTokenExpired(this.currentToken.access_token)) {
			this.tokenExpiredHandler();
			return false;
		}
		return true;
	}

	public tokenExpiredHandler() {
		sessionStorage.removeItem('access_token');
		if (this.jwtHelper.isTokenExpired(this.currentToken.refresh_token)) {
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
