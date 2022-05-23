import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';

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
				{
					name: 'inicio',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'fin',
					formC: new FormControl('', [Validators.minLength(4)]),
				},
			],
			experience: [
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
				{
					name: 'inicio',
					formC: new FormControl('', [Validators.required, Validators.minLength(4)]),
				},
				{
					name: 'fin',
					formC: new FormControl('', [Validators.minLength(4)]),
				},
			],
		};
		if (education) return controls.education;
		else if (experience) return controls.experience;
		return [];
	}

	setControls(
		formGroup: FormGroup,
		personData: Experiences | Education | null,
		flags: { education: boolean; experience: boolean; about: boolean }
	) {
		const controls = this.getControls(flags.education, flags.experience);
		type ObjectKey = keyof typeof personData;
		for (let controlsKey of controls) {
			if (personData != null) {
				let myVar = controlsKey.name as ObjectKey;
				controlsKey.formC.setValue(personData?.[myVar]);
			}
			formGroup.addControl(controlsKey.name, controlsKey.formC);
		}
	}

	checkError(formGroup: FormGroup, formControlName: string, errorName: string) {
		return formGroup.controls[formControlName].hasError(errorName);
	}
}
