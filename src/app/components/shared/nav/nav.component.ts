import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
})
export class NavComponent {
	@Input('title')
	title: any;

	constructor(public auth: AuthService) {}

	logout($event: MouseEvent) {
		console.log('aaa');
	}
}
