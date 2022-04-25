import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class HttpclientService implements HttpInterceptor {
	constructor(private auth: AuthService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let currentUser = this.auth.getCurrentUser();
		if (this.auth.getLoggedIn() && currentUser != undefined)
			req.headers.set('ACCESS_TOKEN', currentUser.token);
		req.headers.set('REFRESH_TOKEN', currentUser.refresh_token);
		return next.handle(req);
	}
}
