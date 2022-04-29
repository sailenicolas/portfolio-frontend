export interface CurrentUser {
	get current_user(): Object;

	get logged_in(): boolean;

	get refresh_token(): string;

	get access_token(): string;

	set refresh_token(refresh_token: string);

	set access_token(access_token: string);

	set expires_at(expires_at: string);
}
