import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../interfaces/education';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-education',
	templateUrl: './list-education.component.html',
	styleUrls: ['./list-education.component.scss'],
})
export class ListEducationComponent implements OnInit {
	@Input('education')
	items!: Education[];
	testForm: FormGroup = new FormGroup({}, undefined, undefined);
	title: any;

	constructor(public router: ActivatedRoute) {
		this.router.snapshot.children.map(item => console.log(item));
	}

	ngOnInit(): void {}
}
