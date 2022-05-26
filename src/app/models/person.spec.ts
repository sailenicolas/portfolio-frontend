import { Person } from './person';

describe('Person', () => {
	it('should create an instance', () => {
		expect(
			new Person(
				0,
				'',
				'',
				{ aboutMe: '', imagen: '', name: '', header: '', id: 0 },
				[],
				[],
				[],
				[]
			)
		).toBeTruthy();
	});
});
