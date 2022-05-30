import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RouterHelpService {
	constructor() {}

	compare(stringToCompare: string, router: ActivatedRoute): Observable<boolean> {
		return new Observable(observer => {
			// Wait until all operations have completed
			router.paramMap.subscribe({
				next: value => {
					observer.next(value.get('routeType') === stringToCompare);
				},
				error: () => {},
				complete: () => {},
			});
		});
	}

	compareArray(
		strings: string[],
		router: ActivatedRoute
	): Observable<{ name: string; result: boolean }> {
		let amp: { result: boolean; name: string }[] = [];
		return new Observable(observer => {
			// Wait until all operations have completed
			router.paramMap.subscribe({
				next: value => {
					strings.forEach((val, index, array) => {
						observer.next({ name: val, result: value.get('routeType') === val });
					});
				},
				error: () => {},
				complete: () => {},
			});
		});
	}
}
