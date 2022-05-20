import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-softskills',
	templateUrl: './softskills.component.html',
	styleUrls: ['./softskills.component.scss'],
})
export class SoftskillsComponent implements OnInit {
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
