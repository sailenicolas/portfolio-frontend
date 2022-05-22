import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class FormHelperService {
	constructor() {}

	getControls(education: boolean, experience: boolean) {
		let controls = {
			education: [
				{
					name: 'institucion',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'titulo',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'carrera',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'puntaje',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
			],
			experiences: [
				{
					name: 'tipoDeEmpleo',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'empresa',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'ubicacion',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'cargo',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
			],
		};
		if (education) return controls.education;
		else if (experience) return controls.experiences;
		return [];
	}
}
