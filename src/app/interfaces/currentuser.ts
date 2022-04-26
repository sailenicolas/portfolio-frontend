export interface CurrentUser {
	get refresh_token(): string;

	get access_token(): string;

	get current_user(): Object;
}
