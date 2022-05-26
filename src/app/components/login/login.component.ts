import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CurrentToken } from '../../models/current-token';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	hide: boolean = true;

	constructor(
		public currentUser: CurrentToken,
		private auth: AuthService,
		public router: Router
	) {}

	loginForms: FormGroup = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(4)]),
		password: new FormControl('', [Validators.required, Validators.minLength(4)]),
	});
	hideSpinner: boolean = false;

	onSubmitClick() {
		if (this.loginForms.valid) {
			this.hideSpinner = true;
			this.auth.login(this.loginForms.value).subscribe({
				next: (current: CurrentToken) => {
					this.currentUser.refresh_token = current.refresh_token;
					this.currentUser.access_token = current.access_token;
					if (this.auth.isAuthenticated()) {
						this.router.navigate(['/portfolio']).then(r => console.log(r));
					}
				},
				error: (err: HttpErrorResponse) => {
					console.log(err.statusText);
					this.hideSpinner = false;
				},
				complete: () => {
					this.hideSpinner = false;
					console.log(this.hideSpinner);
				},
			});
		}
	}
}
