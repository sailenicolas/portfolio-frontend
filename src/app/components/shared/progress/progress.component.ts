import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SoftSkills } from '../../../interfaces/soft-skills';

@Component({
	selector: 'shared-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnChanges, OnInit {
	radius = 54;
	circumference = 2 * Math.PI * this.radius;
	dashoffset: number;
	@Input('softskills')
	softskills!: SoftSkills;

	constructor() {
		this.dashoffset = this.circumference * (1 - 75 / 100);
	}

	ngOnInit() {
		this.progress(this.softskills.val);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['softskills'].previousValue) {
			let softskill: SoftSkills = changes['softskills'].currentValue;
			let softskillOld: SoftSkills = changes['softskills'].previousValue;
			if (softskill.val !== softskillOld.val) {
				this.progress(softskill.val);
			}
		}
	}

	private progress(value: number) {
		const progress = value / 100;
		this.dashoffset = this.circumference * (1 - progress);
	}
}
