import { LoginForm } from './login-form';

describe('Loginform', () => {
	it('should create an instance', () => {
		expect(new LoginForm('', '')).toBeTruthy();
	});
});
