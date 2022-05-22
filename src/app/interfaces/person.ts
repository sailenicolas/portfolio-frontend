import { Experiences } from './experiences';
import { Education } from './education';
import { AboutMe } from './about-me';

export interface Person {
	about: AboutMe;
	experiences: Experiences[];
	education: Education[];
}
