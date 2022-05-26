import { Component, Input } from '@angular/core';
import { SoftSkills } from '../../interfaces/soft-skills';

@Component({
	selector: 'app-soft-skills',
	templateUrl: './soft-skills.component.html',
	styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent {
	@Input('softskills')
	softskills!: SoftSkills[];

	constructor() {}
}
