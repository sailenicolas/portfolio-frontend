import { ErrorFormResponse } from './error-form-response';

export interface GenericError {
	errorCode: string;
	errorMessage: number;
	errorFields: Array<ErrorFormResponse> | null;
}

export interface ErrorGenericResponse {
	message: string;
	details: GenericError;
}
