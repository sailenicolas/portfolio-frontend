import { Person } from './person';

describe('Person', () => {
	it('should create an instance', () => {
		expect(
			new Person(
				0,
				'',
				'',
				{ sobremi: '', imagen: '', nombre: '', header: '', id: 0, email: '' },
				[],
				[],
				[],
				[]
			)
		).toBeTruthy();
	});
});
