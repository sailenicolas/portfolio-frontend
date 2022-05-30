import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { About } from "../../../interfaces/about";

/**
 * @title Injecting data when opening a dialog
 */
@Component({
	selector: 'about-dialog',
	templateUrl: './about-dialog.component.html',
})
export class AboutDialogComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: About) {}
}
