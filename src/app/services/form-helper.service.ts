import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentToEdit } from '../interfaces/component-to.edit';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { AboutMe } from '../interfaces/about-me';
import { SoftSkills } from '../interfaces/soft-skills';
import { Projects } from '../interfaces/projects';

@Injectable({
	providedIn: 'root',
})
export class FormHelperService {
	constructor() {}

	getControls(
		flags: ComponentToEdit,
		vale: Experiences | Education | AboutMe | SoftSkills | Projects | null
	): { [p: string]: AbstractControl } {
		let controls = {
			education: {
				institucion: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'institucion'),
					[Validators.required, Validators.minLength(4)]
				),
				titulo: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'titulo'),
					[Validators.required, Validators.minLength(4)]
				),
				carrera: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'carrera'),
					[Validators.required, Validators.minLength(4)]
				),
				puntaje: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'puntaje'),
					[Validators.required, Validators.minLength(4)]
				),
				inicio: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'inicio'),
					[Validators.required, Validators.minLength(4)]
				),
				fin: new FormControl(
					FormHelperService.getInitialValueEducation(<Education>vale, 'fin'),
					[Validators.minLength(4)]
				),
			},
			experience: {
				tipoDeEmpleo: new FormControl('', [Validators.required, Validators.min(1)]),
				empresa: new FormControl('', [Validators.required, Validators.minLength(4)]),
				ubicacion: new FormControl('', [Validators.required, Validators.minLength(4)]),
				cargo: new FormControl('', [Validators.required, Validators.minLength(4)]),
				dddd: new FormControl('', [Validators.required, Validators.minLength(4)]),
				fin: new FormControl('', [Validators.minLength(4)]),
			},
			about: {
				nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
				sobremi: new FormControl('', [Validators.required, Validators.minLength(4)]),
				ubicacion: new FormControl('', [Validators.required, Validators.minLength(4)]),
				imagen: new FormControl('', [Validators.required, Validators.minLength(4)]),
				contacto: new FormControl('', [Validators.required, Validators.minLength(4)]),
			},
			projects: {
				titulo: new FormControl('', [Validators.required, Validators.minLength(4)]),
				descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
				imagen: new FormControl('', [Validators.minLength(4)]),
			},

			softkills: {
				titulo: new FormControl('', [Validators.required, Validators.minLength(4)]),
				descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
				val: new FormControl('', [
					Validators.required,
					Validators.min(0),
					Validators.max(100),
				]),
			},
		};
		if (flags.education) return controls.education;
		else if (flags.experience) return controls.experience;
		else if (flags.about) return controls.about;
		else if (flags.projects) return controls.projects;
		else if (flags.softskills) return controls.softkills;
		return {};
	}

	checkError(formGroup: FormGroup, formControlName: string, errorName: string) {
		if (formGroup.contains(formControlName)) {
			return formGroup.controls[formControlName].hasError(errorName);
		}
		return false;
	}

	private static getInitialValueEducation(
		vale: Education | null,
		p: keyof Education
	): string | number {
		return vale ? vale[p] : '';
	}
}
