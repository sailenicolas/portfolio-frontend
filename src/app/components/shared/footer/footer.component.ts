import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'shared-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	@Input('title')
	title: any;

	constructor() {}

	ngOnInit(): void {}
}
