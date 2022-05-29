import { Component, Input, OnInit } from '@angular/core';
import { ErrorFormResponse } from '../../../interfaces/error-form-response';
import { ErrorGenericResponse, GenericError } from '../../../interfaces/errorGenericResponse';

@Component({
	selector: 'app-error-response',
	templateUrl: './error-response.component.html',
	styleUrls: ['./error-response.component.scss'],
})
export class ErrorResponseComponent implements OnInit {
	@Input('error')
	error!: ErrorGenericResponse;
	errorArr: Array<ErrorFormResponse> | null = null;
	array = Array;
	errorSingle: { details: GenericError; message: string } | null = null;

	constructor() {}

	ngOnInit(): void {
		this.errorArr = Array.isArray(this.error.details) ? this.error.details : null;
		this.errorSingle = !Array.isArray(this.error.details)
			? {
					message: this.error.message,
					details: <GenericError>this.error.details,
			  }
			: null;
	}
}
