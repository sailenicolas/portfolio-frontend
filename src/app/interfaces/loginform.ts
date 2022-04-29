export interface LoginForm {
	set password(password: string);

	set username(username: string);

	get password(): string;

	get username(): string;
}
