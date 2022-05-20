import { Injectable } from '@angular/core';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor() {}

	getItems(): Observable<Person> {
		return of({
			about_me: '',
			image: '',
			name: '',
			experiences: <Experiences[]>[
				{
					id: 0,
					ubicacion: 'Segui',
					tipoDeEmpleo: 'Jornada Completa',
					fin: null,
					imagen: '',
					inicio: 2020,
					empresa: 'Fabrica 2',
					cargo: 'Programador 1',
				},
			],
			education: <Education[]>[
				{
					id: 0,
					lugar: 'UTN',
					titulo: 'Ingeniería',
					imagen: 'https://www.ort.edu.ar/img/LogoOrtArgWeb2017.jpg',
					career: 'Sistemas Computacionales',
					puntaje: 100,
					inicio: 2019,
					fin: 2023,
				},
				{
					lugar: 'Centro de Enseñanza Técnica Industrial',
					titulo: 'Tecnologia',
					imagen: 'https://media-exp1.licdn.com/dms/image/C560BAQEUHhax7RCj0A/company-logo_100_100/0/1584819716706',
					career: 'Desarrollo de Software',
					puntaje: 82,
					inicio: 2014,
					fin: 2018,
				},
				{
					lugar: 'Escuela Secundaria Técnica 14',
					titulo: 'Técnico',
					imagen: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFhOoraRhsOSQ/company-logo_100_100/0/1590421269154',
					career: 'Electronica, comunicacion y sistemas de control',
					puntaje: 70,
					inicio: 2012,
					fin: 2014,
				},
			],
		});
	}
}
