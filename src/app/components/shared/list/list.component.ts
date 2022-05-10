import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'shared-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	@Input('titleHead')
	title: any;
	@Input('itemsValues')
	items: any;

	constructor() {}

	ngOnInit(): void {}
}
