import { AfterViewChecked, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CurrentUser } from '../../class/currentuser';
import { Router } from '@angular/router';

export interface FormsLogin {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewChecked {
	hide: boolean = true;

	constructor(
		public currentUser: CurrentUser,
		private auth: AuthService,
		public router: Router
	) {}

	loginForms: FormGroup = new FormGroup({
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(4),
		]),
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(5),
		]),
	});
	hideSpinner: boolean = false;

	onSubmitClick($event: SubmitEvent) {
		if (this.loginForms.valid) {
			this.hideSpinner = true;
			this.auth.login(this.loginForms.value).subscribe({
				next: nexts => {
					this.currentUser.refresh_token = nexts.refresh_token;
					this.currentUser.access_token = nexts.access_token;
					this.currentUser.expires_at = nexts.expires_at;
					if (this.auth.isAuthenticated()) {
						this.router
							.navigate(['/users'])
							.then(r => console.log(r));
					}
				},
				error: err => {
					console.log(err.getMessage());
					this.hideSpinner = false;
				},
				complete: () => {
					this.hideSpinner = false;
				},
			});
		}
	}

	ngAfterViewChecked(): void {}
}
