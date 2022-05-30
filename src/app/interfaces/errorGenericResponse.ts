import { ErrorFormResponse } from './error-form-response';

export interface GenericError {
	errorCode: string;
	errorMessage: number;
}

export interface ErrorGenericResponse {
	message: string;
	details: GenericError | Array<ErrorFormResponse>;
}
