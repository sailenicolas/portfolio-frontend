import { CurrentUser as CU } from '../interfaces/currentuser';
import { JwtHelperService } from '@auth0/angular-jwt';

export class CurrentUser implements CU {
	get current_user(): Object {
		return {
			refresh_token: this.refresh_token,
			access_token: this.access_token,
			expires_at: this.expires_at,
		};
	}

	get logged_in(): boolean {
		const helper = new JwtHelperService();
		return !helper.isTokenExpired(this.access_token);
	}

	get refresh_token() {
		return sessionStorage.getItem('refresh_token') ?? '';
	}

	get access_token() {
		return sessionStorage.getItem('access_token') ?? '';
	}

	set refresh_token(refresh_token: string) {
		sessionStorage.setItem('refresh_token', refresh_token);
	}

	set access_token(access_token: string) {
		sessionStorage.setItem('access_token', access_token);
	}

	set expires_at(expires_at: string) {
		sessionStorage.setItem('expires_at', expires_at);
	}
}
