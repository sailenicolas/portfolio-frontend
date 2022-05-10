import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'shared-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnChanges {
	@Input() value: number = 0;
	radius = 54;
	circumference = 2 * Math.PI * this.radius;
	dashoffset: number;

	constructor() {
		this.dashoffset = this.circumference * (1 - 75 / 100);
		this.progress(0);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'].currentValue !== changes['value'].previousValue) {
			this.progress(changes['value'].currentValue);
		}
	}

	private progress(value: number) {
		const progress = value / 100;
		this.dashoffset = this.circumference * (1 - progress);
	}
}
