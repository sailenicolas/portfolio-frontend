import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-soft-skills',
	templateUrl: './soft-skills.component.html',
	styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	openAddDialog($event: MouseEvent) {
		$event.preventDefault();
		console.log('Ccalled from parent ' + $event.AT_TARGET.toString());
	}

	openEditDialog($event: MouseEvent) {
		$event.preventDefault();
		console.log('Ccalled from parent ' + $event.AT_TARGET.toString());
	}
}
