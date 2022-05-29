import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-shared-title',
	templateUrl: './shared-title.component.html',
	styleUrls: ['./shared-title.component.scss'],
})
export class SharedTitleComponent {
	@Input('title')
	title: string;
	@Input()
	add: boolean = false;
	@Input()
	delete: boolean = false;
	@Input('ids')
	ids: number | undefined;
	@Input('listType')
	listType: string;
	@Input('edit')
	edit: boolean = false;
	@Input('state')
	state: Object = {};

	mb() {
		return !this.add ? '0px' : false;
	}

	constructor() {
		this.listType = '';
		this.title = '';
	}
}
