import { Person } from './person';

describe('Person', () => {
	it('should create an instance', () => {
		expect(new Person({ about_me: '', image: '', name: '' }, [], [])).toBeTruthy();
	});
});
