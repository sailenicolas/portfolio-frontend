import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

export interface FormsLogin {
	email: string;
	password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	email: any;
	hide: boolean = false;
	loginForms: FormGroup =   new FormGroup({
		password: new FormControl('', [Validators.required, Validators.minLength(2)]),
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	constructor(private auth: AuthService) {
	}

	onSubmitClick($event: SubmitEvent) {
		if(this.loginForms.valid){
			this.auth.login(this.loginForms);
		}
	}
}

