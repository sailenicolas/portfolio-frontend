import { Person } from './person';

describe('Person', () => {
	it('should create an instance', () => {
		expect(
			new Person(
				0,
				'',
				'',
				{
					ubicacion: '',
					sobremi: '',
					imagen: '',
					nombre: '',
					header: '',
					id: 0,
					email: '',
				},
				[],
				[],
				[],
				[]
			)
		).toBeTruthy();
	});
});
