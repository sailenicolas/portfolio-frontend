import { Component, Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MatDateFormats,
	NativeDateAdapter,
} from '@angular/material/core';

export const APP_DATE_FORMATS: MatDateFormats = {
	parse: {
		dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
	},
	display: {
		dateInput: 'input',
		monthYearLabel: { year: 'numeric', month: 'numeric' },
		dateA11yLabel: {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		},
		monthYearA11yLabel: { year: 'numeric', month: 'long' },
	},
};

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
	override format(date: Date, displayFormat: Object): string {
		if (displayFormat === 'input') {
			let day: string = date.getDate().toString();
			day = +day < 10 ? '0' + day : day;
			let month: string = (date.getMonth() + 1).toString();
			month = +month < 10 ? '0' + month : month;
			let year = date.getFullYear();
			return `${day}-${month}-${year}`;
		}
		return date.toDateString();
	}
}

@Component({
	selector: 'app-portfolio-edit-form',
	templateUrl: './portfolio-edit-form.component.html',
	styleUrls: ['./portfolio-edit-form.component.scss'],
	providers: [
		{ provide: DateAdapter, useClass: AppDateAdapter },
		{ provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
	],
})
export class PortfolioEditForm {
	dateCtrl: FormControl;

	constructor() {
		this.dateCtrl = new FormControl('', [Validators.required, Validators.minLength(4)]);
	}
}
