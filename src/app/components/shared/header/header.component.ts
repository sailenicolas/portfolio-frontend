import { Component, Input } from '@angular/core';
import { AboutMe } from '../../../interfaces/about-me';

@Component({
	selector: 'shared-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input('about')
	about!: AboutMe;

	constructor() {}
}
