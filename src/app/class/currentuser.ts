import { CurrentUser as CU } from '../interfaces/currentuser';

export class CurrentUser implements CU {
	constructor(
		private currentuser: Object,
		private refreshtoken: string,
		private accesstoken: string,
		private loggedin: boolean
	) {}

	get current_user() {
		return this.currentuser;
	}

	get logged_in() {
		return this.loggedin;
	}

	get refresh_token() {
		return this.refreshtoken;
	}

	get access_token() {
		return this.accesstoken;
	}
}
