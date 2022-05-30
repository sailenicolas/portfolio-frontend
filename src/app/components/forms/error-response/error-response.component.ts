import { Component, Input, OnInit } from '@angular/core';
import { ErrorGenericResponse } from '../../../interfaces/errorGenericResponse';

@Component({
	selector: 'app-error-response',
	templateUrl: './error-response.component.html',
	styleUrls: ['./error-response.component.scss'],
})
export class ErrorResponseComponent implements OnInit {
	@Input('error')
	error!: ErrorGenericResponse;
	array = Array;
	errorSingle: ErrorGenericResponse | null = null;

	constructor() {}

	ngOnInit(): void {}
}
