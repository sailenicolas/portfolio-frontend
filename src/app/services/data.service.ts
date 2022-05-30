import { Injectable } from '@angular/core';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person';
import { SoftSkills } from '../interfaces/soft-skills';
import { Projects } from '../interfaces/projects';
import { ComponentToEdit } from '../interfaces/component-to.edit';
import { About } from '../interfaces/about';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { SuccessResponse } from '../interfaces/success-response';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private API_VERSION: string = environment.apiVersion;

	constructor(private http: HttpClient) {}

	private readonly URL_HOST = environment.urlHost + '/' + this.API_VERSION;

	private options = {
		headers: new HttpHeaders(),
	};

	findPersonData(
		id: number,
		flags: ComponentToEdit
	): Observable<Experiences | Education | About | SoftSkills | Projects | null> {
		let url = '/user';
		if (flags.education) {
			url += '/education/';
			return this.http.get<Education>(this.URL_HOST + url + id, this.options);
		} else if (flags.experience) {
			url += '/experience/';
			return this.http.get<Experiences>(this.URL_HOST + url + id, this.options);
		} else if (flags.softskills) {
			url += '/softskills/';
			return this.http.get<SoftSkills>(this.URL_HOST + url + id, this.options);
		} else if (flags.projects) {
			url += '/projects/';
			return this.http.get<Projects>(this.URL_HOST + url + id, this.options);
		} else if (flags.about) {
			url += '/aboutMe/';
			return this.http.get<About>(this.URL_HOST + url, this.options);
		}
		return of(null);
	}

	getPersonsData(): Observable<Person> {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
		};
		return this.http.get<Person>(this.URL_HOST + '/user/me', options);
	}

	putForm(
		formGroup: FormGroup,
		flags: ComponentToEdit,
		id: number
	): Observable<Experiences | Education | About | SoftSkills | Projects | null> {
		let url = '/user';
		if (flags.education) {
			url += '/education/';
			return this.http.put<Education>(
				this.URL_HOST + url + id,
				formGroup.value,
				this.options
			);
		} else if (flags.experience) {
			url += '/experience/';
			return this.http.put<Experiences>(
				this.URL_HOST + url + id,
				formGroup.value,
				this.options
			);
		} else if (flags.softskills) {
			url += '/softskills/';
			return this.http.put<SoftSkills>(
				this.URL_HOST + url + id,
				formGroup.value,
				this.options
			);
		} else if (flags.projects) {
			url += '/projects/';
			return this.http.put<Projects>(this.URL_HOST + url + id, formGroup.value, this.options);
		} else if (flags.about) {
			url += '/aboutMe/';
			return this.http.put<About>(this.URL_HOST + url + id, formGroup.value, this.options);
		}
		return of(null);
	}

	addForm(
		formGroup: FormGroup,
		flags: ComponentToEdit
	): Observable<Experiences | Education | About | SoftSkills | Projects | null> {
		let url = '/user';
		if (flags.education) {
			url += '/educations/';
			return this.http.post<Education>(this.URL_HOST + url, formGroup.value, this.options);
		} else if (flags.experience) {
			url += '/experience/';
			return this.http.post<Experiences>(this.URL_HOST + url, formGroup.value, this.options);
		} else if (flags.softskills) {
			url += '/softskills/';
			return this.http.post<SoftSkills>(this.URL_HOST + url, formGroup.value, this.options);
		} else if (flags.projects) {
			url += '/projects/';
			return this.http.post<Projects>(this.URL_HOST + url, formGroup.value, this.options);
		} else if (flags.about) {
			url += '/aboutMe/';
			return this.http.post<About>(this.URL_HOST + url, formGroup.value, this.options);
		}
		return of(null);
	}

	delForm(flags: ComponentToEdit, id: number): Observable<SuccessResponse | null> {
		let url = '/user';
		if (flags.education) {
			url += '/educations/';
		} else if (flags.experience) {
			url += '/experiences/';
		} else if (flags.softskills) {
			url += '/softskills/';
		} else if (flags.projects) {
			url += '/projects/';
		} else if (flags.about) {
			url += '/aboutMe/';
		}
		return this.http.delete<SuccessResponse>(this.URL_HOST + url + id, this.options);
	}
}
