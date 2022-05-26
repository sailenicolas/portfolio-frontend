import { Injectable } from '@angular/core';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person';
import { SoftSkills } from '../interfaces/soft-skills';
import { Projects } from '../interfaces/projects';
import { ComponentToEdit } from '../interfaces/component-to.edit';
import { AboutMe } from '../interfaces/about-me';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private API_VERSION: string = environment.apiVersion;

	constructor(private http: HttpClient) {}

	private readonly URL_HOST = 'http://localhost:8080' + this.API_VERSION;

	findPersonData(
		id: number,
		flags: ComponentToEdit
	): Observable<Experiences | Education | AboutMe | SoftSkills | Projects | null> {
		let url = '/user';
		let options = {
			headers: new HttpHeaders(),
		};
		if (flags.education) {
			url += '/education/';
			return this.http.get<Education>(this.URL_HOST + url + id, options);
		} else if (flags.experience) {
			url += '/experience/';
			return this.http.get<Experiences>(this.URL_HOST + url + id, options);
		} else if (flags.softskills) {
			url += '/softskills/';
			return this.http.get<SoftSkills>(this.URL_HOST + url + id, options);
		} else if (flags.projects) {
			url += '/projects/';
			return this.http.get<Projects>(this.URL_HOST + url + id, options);
		} else if (flags.about) {
			url += '/aboutMe/';
			return this.http.get<AboutMe>(this.URL_HOST + url, options);
		}
		return of(null);
	}

	getPersonsData(): Observable<Person> {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
		};
		return this.http.get<Person>(
			'http://localhost:8080' + this.API_VERSION + '/user/me',
			options
		);
	}
}
