import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../class/currentuser';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(public currentUser: CurrentUser, private http: HttpClient) {}

	login(loginForms: FormGroup) {
		console.log('Welp' + loginForms.value.email);
		this.http.post('', loginForms).subscribe({
			next: nexts => {
				console.log(nexts);
			},
			complete: () => {},
			error: err => {},
		});
	}
}
