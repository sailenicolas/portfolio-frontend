import { Experiences } from './experiences';
import { Education } from './education';
import { About } from './about';
import { Projects } from './projects';
import { SoftSkills } from './soft-skills';

export interface Person {
	id: Number;
	email: string;
	username: string;
	aboutMe: About;
	experiences: Experiences[];
	educations: Education[];
	projects: Projects[];
	softSkills: SoftSkills[];
}
