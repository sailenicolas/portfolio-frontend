import { LoginForm as LF } from '../interfaces/loginform';

export class LoginForm implements LF {
	constructor(private user_name: string, private pass_word: string) {
		this.user_name = user_name;
		this.pass_word = pass_word;
	}

	set password(password: string) {
		this.pass_word = password;
	}

	set username(username: string) {
		this.user_name = username;
	}

	get password(): string {
		return this.pass_word;
	}

	get username(): string {
		return this.user_name;
	}
}
