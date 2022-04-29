import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class UnauthGuard implements CanActivate, CanLoad {
	constructor(public auth: AuthService, public router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (this.auth.isAuthenticated()) {
			this.router.navigate(['/users']).then(r => {
				console.log(r);
			});
			return false;
		}
		return true;
	}

	canLoad(route: Route, segments: UrlSegment[]): boolean {
		if (this.auth.isAuthenticated()) {
			console.log('algo1, algo1');
			this.router.navigate(['/']);
			return false;
		}
		console.log('algo, algo');

		return true;
	}
}
