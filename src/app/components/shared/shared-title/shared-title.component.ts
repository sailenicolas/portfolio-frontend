import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-shared-title',
	templateUrl: './shared-title.component.html',
	styleUrls: ['./shared-title.component.scss'],
})
export class SharedTitleComponent {
	@Input('title')
	title!: string;
	@Input()
	add: string = 'true';
	@Input()
	delete: string = 'false';
	@Input('id')
	id!: number;

	mb() {
		return this.add === 'false' ? '0px' : false;
	}

	constructor() {}
}
