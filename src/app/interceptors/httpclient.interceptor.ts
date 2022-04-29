import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class HttpclientInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		console.log('INTERCEPTOR2');
		let currentUser = this.auth.currentUser;
		if (this.auth.currentUser.logged_in && currentUser != undefined) {
			console.log('INTERCEPTOR1');
			req.headers.set('ACCESS_TOKEN', currentUser.access_token);
			req.headers.set('REFRESH_TOKEN', currentUser.refresh_token);
		}
		return next.handle(req);
	}
}
