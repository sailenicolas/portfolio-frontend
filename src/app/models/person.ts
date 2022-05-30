import { Person as PersonInterface } from '../interfaces/person';
import { Experiences } from '../interfaces/experiences';
import { Education } from '../interfaces/education';
import { About } from '../interfaces/about';
import { SoftSkills } from '../interfaces/soft-skills';
import { Projects } from '../interfaces/projects';

export class Person implements PersonInterface {
	id: Number;
	email: string;
	username: string;
	aboutMe: About;
	experiences: Experiences[];
	educations: Education[];
	softSkills: SoftSkills[];
	projects: Projects[];

	constructor(
		id: Number,
		email: string,
		username: string,
		aboutMe: About,
		experiences: Experiences[],
		education: Education[],
		softskills: SoftSkills[],
		projects: Projects[]
	) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.aboutMe = aboutMe;
		this.experiences = experiences;
		this.educations = education;
		this.softSkills = softskills;
		this.projects = projects;
	}
}
