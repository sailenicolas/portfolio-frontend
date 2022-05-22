import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../../services/router-help.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
		const controls = this.formHelperService.getControls(this.education, this.experiences);
		const personData = this.personData;
		type ObjectKey = keyof typeof personData;
		this.formGroup.addControl(
			'inicio',
			new FormControl(personData?.inicio, [Validators.required, Validators.minLength(4)])
		);
		this.formGroup.addControl(
			'fin',
			new FormControl(personData?.fin, [Validators.required, Validators.minLength(4)])
		);
		for (let controlsKey of controls) {
			let myVar = controlsKey.name as ObjectKey;
			controlsKey.formC.setValue(this.personData?.[myVar]);
			this.formGroup.addControl(controlsKey.name, controlsKey.formC);
		}
	}

	onClickSubmit($event: MouseEvent) {
		console.log('is not gonna work');
		console.log(this.formGroup.valid, this.formGroup.controls['cargo'].errors?.['required']);
	}
}
