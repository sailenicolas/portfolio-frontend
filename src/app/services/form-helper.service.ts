import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentToEdit } from '../interfaces/component-to.edit';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { AboutMe } from '../interfaces/about-me';
import { SoftSkills } from '../interfaces/soft-skills';
import { Projects } from '../interfaces/projects';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
/*
 *
 * let keyF = name as keyof ComponentToEdit;
 * this.experiences[keyF] = result;
 *
 * */
export class FormHelperService {
	constructor() {}

	getControls(
		flags: ComponentToEdit,
		vale: Experiences | Education | AboutMe | SoftSkills | Projects | null
	): { [p: string]: AbstractControl } {
		let controls = {
			education: {
				institucion: new FormControl(
					vale != null && 'institucion' in vale ? vale.institucion : '',
					[Validators.required, Validators.minLength(4)]
				),
				titulo: new FormControl(vale != null && 'titulo' in vale ? vale.titulo : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				carrera: new FormControl(vale != null && 'carrera' in vale ? vale.carrera : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				puntaje: new FormControl(vale != null && 'puntaje' in vale ? vale.puntaje : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				inicio: new FormControl(vale != null && 'inicio' in vale ? vale.inicio : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				fin: new FormControl(vale != null && 'fin' in vale ? vale.fin : '', [
					Validators.minLength(4),
				]),
			},
			experience: {
				tipoDeEmpleo: new FormControl(
					vale != null && 'tipoDeEmpleo' in vale ? vale.tipoDeEmpleo : '',
					[Validators.required, Validators.min(1)]
				),
				empresa: new FormControl(vale != null && 'empresa' in vale ? vale.empresa : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				ubicacion: new FormControl(
					vale != null && 'ubicacion' in vale ? vale.ubicacion : '',
					[Validators.required, Validators.minLength(4)]
				),
				cargo: new FormControl(vale != null && 'cargo' in vale ? vale.cargo : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				inicio: new FormControl(vale != null && 'inicio' in vale ? vale.inicio : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				fin: new FormControl(vale != null && 'fin' in vale ? vale.fin : '', [
					Validators.minLength(4),
				]),
			},
			aboutMe: {
				nombre: new FormControl(vale != null && 'nombre' in vale ? vale['nombre'] : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				sobremi: new FormControl(vale != null && 'sobremi' in vale ? vale['sobremi'] : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				ubicacion: new FormControl(
					vale != null && 'ubicacion' in vale ? vale['ubicacion'] : '',
					[Validators.required, Validators.minLength(4)]
				),
				imagen: new FormControl(vale != null && 'imagen' in vale ? vale['imagen'] : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				contacto: new FormControl(
					vale != null && 'contacto' in vale ? vale['institucion'] : '',
					[Validators.required, Validators.minLength(4)]
				),
			},
			projects: {
				titulo: new FormControl(vale != null && 'titulo' in vale ? vale.titulo : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				descripcion: new FormControl(
					vale != null && 'descripcion' in vale ? vale.descripcion : '',
					[Validators.required, Validators.minLength(4)]
				),
				imagen: new FormControl(vale != null && 'imagen' in vale ? vale.imagen : '', [
					Validators.minLength(4),
				]),
			},

			softkills: {
				titulo: new FormControl(vale != null && 'titulo' in vale ? vale.titulo : '', [
					Validators.required,
					Validators.minLength(4),
				]),
				descripcion: new FormControl(
					vale != null && 'descripcion' in vale ? vale.descripcion : '',
					[Validators.required, Validators.minLength(4)]
				),
				val: new FormControl(vale != null && 'val' in vale ? vale.val : '', [
					Validators.required,
					Validators.min(0),
					Validators.max(100),
				]),
			},
		};
		if (flags.education) return controls.education;
		else if (flags.experience) return controls.experience;
		else if (flags.about) return controls.aboutMe;
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

	getId(router: ActivatedRoute): number {
		let id: number = -1;
		router.paramMap.subscribe({
			next: (params: ParamMap) => {
				id = Number(params.get('id'));
				return id;
			},
		});
		return id;
	}
}
