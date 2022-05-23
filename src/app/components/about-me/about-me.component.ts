import { Component, Input, OnInit } from '@angular/core';
import { AboutMe } from '../../interfaces/about-me';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
	@Input('about')
	about!: AboutMe;

	constructor() {}

	ngOnInit(): void {}
}
