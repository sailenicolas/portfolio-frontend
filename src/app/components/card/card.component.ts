import { Component } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	mybreakpoint: number = 12;
	myrowspan: number = 2;
	mycolspan: number = 10;
	myrowHeight: string = '1:1';

	constructor() {
		this.handleSize();
	}

	handleSize() {
		this.mybreakpoint = window.innerWidth <= 1200 ? 1 : 12;
		this.myrowspan = window.innerWidth <= 1200 ? 1 : 2;
		this.mycolspan = window.innerWidth <= 1200 ? 1 : 10;
		this.myrowHeight = window.innerWidth <= 1200 ? '2:1' : '1:1';
	}
}
