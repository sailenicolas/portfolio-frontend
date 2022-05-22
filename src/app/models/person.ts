import { Person as PersonInterface } from '../interfaces/person';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { AboutMe } from '../interfaces/about-me';

export class Person implements PersonInterface {
	experiences: Experiences[];
	education: Education[];
	about: AboutMe;

	constructor(about_me: AboutMe, experiences: Experiences[], education: Education[]) {
		this.about = about_me;
		this.experiences = experiences;
		this.education = education;
	}
}
