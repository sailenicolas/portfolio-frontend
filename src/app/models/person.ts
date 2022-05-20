import { Person as PersonInterface } from '../interfaces/person';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';

export class Person implements PersonInterface {
	about_me: string;
	image: string;
	name: string;
	experiences: Experiences[];
	education: Education[];

	constructor(
		about_me: string,
		image: string,
		name: string,
		experiences: Experiences[],
		education: Education[]
	) {
		this.about_me = about_me;
		this.image = image;
		this.name = name;
		this.experiences = experiences;
		this.education = education;
	}
}
