import { LoginForm } from './loginform';

describe('Loginform', () => {
	it('should create an instance', () => {
		expect(new LoginForm('', '')).toBeTruthy();
	});
});
