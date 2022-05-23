import { Injectable } from '@angular/core';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person';
import { TipoDeEmpleo } from '../enums/tipo-de-empleo';
import { AboutMe } from '../interfaces/about-me';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor() {}

	findPersonData(
		id: number,
		flags: { education: boolean; experience: boolean; about: boolean }
	): Experiences | Education | null {
		if (flags.education) {
			return this._value.education[id];
		}
		if (flags.experience) {
			return this._value.experiences[id];
		}
		return null;
	}

	private readonly _value = {
		about: {
			about_me:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus illo neque quae quas rerum tempora. Autem deserunt earum est ex inventore iusto labore magni odio quisquam ratione, sunt voluptas.',
			image: '',
			name: 'Jhon',
		},
		experiences: <Experiences[]>[
			{
				id: 0,
				ubicacion: 'Segui',
				tipoDeEmpleo: TipoDeEmpleo.seasonal,
				inicio: '2017-06-01',
				fin: '2017-06-05',
				imagen: '',
				empresa: 'Fabrica 2',
				cargo: 'Programador 1',
			},
		],
		education: <Education[]>[
			{
				id: 0,
				institucion: 'UTN',
				titulo: 'Ingeniería',
				imagen: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg',
				carrera: 'Sistemas Computacionales',
				puntaje: 100,
				inicio: '2017-06-01',
				fin: '2017-06-05',
			},
			{
				id: 1,
				institucion: 'Centro de Enseñanza Técnica Industrial',
				titulo: 'Tecnologia',
				imagen: 'https://media-exp1.licdn.com/dms/image/C560BAQEUHhax7RCj0A/company-logo_100_100/0/1584819716706',
				carrera: 'Desarrollo de Software',
				puntaje: 82,
				inicio: '2017-06-01',
				fin: '2017-06-05',
			},
			{
				id: 2,
				institucion: 'Escuela Secundaria Técnica 14',
				titulo: 'Técnico',
				imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154',
				carrera: 'Electronica, comunicacion y sistemas de control',
				puntaje: 70,
				inicio: '2017-06-01',
				fin: '2017-06-02',
			},
		],
	};

	getPersonsData(): Observable<Person> {
		return of(this._value);
	}

	fetchAboutMe(): AboutMe {
		return this._value.about;
	}
}
