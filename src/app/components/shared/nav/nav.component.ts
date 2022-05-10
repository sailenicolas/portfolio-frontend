import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DarkService } from '../../../services/dark.service';

@Component({
	selector: 'shared-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
})
export class NavComponent {
	@Input('title')
	title: any;
	darkMode: boolean;

	constructor(public auth: AuthService, public dark: DarkService) {
		this.darkMode = this.dark.darkMode;
		console.log('1 ' + this.darkMode);
		console.log('2 ' + this.dark.darkMode);
	}

	togglerGroup($e: MouseEvent) {
		this.darkMode = this.dark.toggle();
	}

	logout($event: MouseEvent) {
		console.log('aaa');
	}
}
