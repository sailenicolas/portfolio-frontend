import { ErrorFormResponse } from './error-form-response';

export interface GenericError {
	errorcode: string;
	errormsg: number;
}

export interface ErrorGenericResponse {
	message: string;
	details: GenericError | Array<ErrorFormResponse>;
}
