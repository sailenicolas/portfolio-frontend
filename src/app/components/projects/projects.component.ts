import { Component, Input } from '@angular/core';
import { Projects } from '../../models/projects';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
	@Input('projects')
	projects!: Projects[];

	constructor() {}
}
