import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../../services/router-help.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { DataService } from '../../../services/data.service';
import { Experiences } from '../../../interfaces/experiences';
import { Education } from '../../../interfaces/education';

@Component({
	selector: 'app-portfolio-edit-form',
	templateUrl: './portfolio-edit-form.component.html',
	styleUrls: ['./portfolio-edit-form.component.scss'],
})
export class PortfolioEditForm implements OnInit {
	education: boolean;
	experiences: boolean;
	formGroup: FormGroup;
	private id: number = -1;
	private personData: Experiences | Education | null = null;

	constructor(
		public routerService: RouterHelpService,
		private router: ActivatedRoute,
		private formHelperService: FormHelperService,
		private dataService: DataService
	) {
		this.experiences = false;
		this.education = false;
		this.router.paramMap.subscribe({
			next: (params: ParamMap) => {
				this.id = Number(params.get('id'));
			},
		});
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
		this.personData = this.dataService.findPersonData(
			this.id,
			this.education,
			this.experiences
		);
		this.formHelperService.setControls(this.formGroup, this.personData, {
			education: this.education,
			experiences: this.experiences,
		});
	}

	onClickSubmit($event: MouseEvent) {
		console.log('is not gonna work');
		console.log(this.formGroup.valid, this.formGroup.controls['cargo'].errors?.['required']);
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelperService.checkError(this.formGroup, formControlName, errorName);
	}
}
