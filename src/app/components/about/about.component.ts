import { Component, Input, OnInit } from '@angular/core';
import { About } from '../../interfaces/about';
import { MatDialog } from '@angular/material/dialog';
import { AboutDialogComponent } from './modal/about-dialog.component';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	@Input('about')
	about!: About;

	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	getModal($event: MouseEvent) {
		this.dialog.open(AboutDialogComponent, { data: this.about });
	}
}
