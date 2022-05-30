export interface CurrentToken {
	get current_token(): Object;

	get logged_in(): boolean;

	get refresh_token(): string;

	get access_token(): string;

	set refresh_token(refresh_token: string);

	set access_token(access_token: string);
}
