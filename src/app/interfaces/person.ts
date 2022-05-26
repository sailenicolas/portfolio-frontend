import { Experiences } from './experiences';
import { Education } from './education';
import { AboutMe } from './about-me';
import { Projects } from './projects';
import { SoftSkills } from './soft-skills';

export interface Person {
	id: Number;
	email: string;
	username: string;
	aboutMe: AboutMe;
	experiences: Experiences[];
	educations: Education[];
	projects: Projects[];
	softSkills: SoftSkills[];
}
