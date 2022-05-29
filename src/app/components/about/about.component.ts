import { Component, Input, OnInit } from '@angular/core';
import { About } from '../../interfaces/about';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	@Input('about')
	about!: About;

	constructor() {}

	ngOnInit(): void {}
}
