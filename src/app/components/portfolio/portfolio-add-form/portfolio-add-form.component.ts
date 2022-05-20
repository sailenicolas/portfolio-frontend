import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: "app-portfolio-add-form",
	templateUrl: "./portfolio-add-form.component.html",
	styleUrls: ["./portfolio-add-form.component.scss"]
})
export class PortfolioAddForm {
	date: FormControl;
	data: any;

	constructor() {
		this.date = new FormControl();
	}
}
