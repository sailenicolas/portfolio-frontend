import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface CurrenUser {
	token: string;
	refresh_token: string;
	current_user: Object;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		private loggedIn: boolean,
		private currentUser: CurrenUser,
		private http: HttpClient
	) {}

	login(loginForms: FormGroup) {
		console.log('Welp' + loginForms.value.email);
	}

	getLoggedIn() {
		return this.loggedIn;
	}

	getCurrentUser() {
		return this.currentUser;
	}
}
