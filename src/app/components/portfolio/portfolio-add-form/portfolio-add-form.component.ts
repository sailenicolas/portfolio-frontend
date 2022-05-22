import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../../services/router-help.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';

@Component({
	selector: 'app-portfolio-add-form',
	templateUrl: './portfolio-add-form.component.html',
	styleUrls: ['./portfolio-add-form.component.scss'],
})
export class PortfolioAddForm implements OnInit {
	data: any;
	experiences: boolean;
	education: boolean;
	formGroup: FormGroup;

	constructor(
		public routerService: RouterHelpService,
		private router: ActivatedRoute,
		private formHelperService: FormHelperService
	) {
		this.experiences = false;
		this.education = false;
		this.formGroup = new FormGroup({});
	}

	ngOnInit(): void {
		this.routerService.compare('education', this.router).subscribe({
			next: item => {
				this.education = item;
			},
		});
		this.routerService.compare('experiences', this.router).subscribe({
			next: item => {
				this.experiences = item;
			},
		});
		this.formHelperService.setControls(this.formGroup, null, {
			education: this.education,
			experiences: this.experiences,
		});
	}

	onClickSubmit($event: MouseEvent) {}

	checkError(formControlName: string, errorName: string) {
		return this.formHelperService.checkError(this.formGroup, formControlName, errorName);
	}
}
