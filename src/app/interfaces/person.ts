import { Experiences } from './experiences';
import { Education } from './education';

export interface Person {
	name: string;
	about_me: string;
	image: string;
	experiences: Experiences[];
	education: Education[];
}
