import { Component, Input, OnInit } from '@angular/core';
import { ErrorResponse } from '../education/form-education.component';

@Component({
	selector: 'app-error-response',
	templateUrl: './error-response.component.html',
	styleUrls: ['./error-response.component.scss'],
})
export class ErrorResponseComponent implements OnInit {
	@Input('error')
	error!: Array<ErrorResponse>;

	constructor() {}

	ngOnInit(): void {}
}
