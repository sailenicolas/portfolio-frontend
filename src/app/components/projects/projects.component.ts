import { Component } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
	constructor() {}

	openAddDialog($event: MouseEvent) {
		$event.preventDefault();
		console.log('Ccalled from parent 23' + $event);
	}

	openEditDialog($event: MouseEvent) {
		$event.preventDefault();
		console.log('Ccalled from parent 13' + $event.target);
	}
}
