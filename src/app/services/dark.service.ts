import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DarkService {
	constructor() {}

	get darkMode(): boolean {
		const item: boolean = localStorage.getItem('dark') === 'false' ? false : true;
		this.toggleclass(item);
		return item;
	}

	set darkMode(value: boolean) {
		localStorage.setItem('dark', String(value));
	}

	toggle() {
		this.darkMode = !this.darkMode;
		this.toggleclass(this.darkMode);
		return this.darkMode;
	}

	private toggleclass(item: boolean) {
		if (item) {
			document.getElementsByTagName('html').item(0)?.classList.add('dark');
			document.getElementsByTagName('body').item(0)?.classList.remove('light-theme-body');
		} else {
			document.getElementsByTagName('html').item(0)?.classList.remove('dark');
			document.getElementsByTagName('body').item(0)?.classList.add('light-theme-body');
		}
	}
}
