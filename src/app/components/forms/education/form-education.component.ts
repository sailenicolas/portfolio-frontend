import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../../../interfaces/education';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { About } from '../../../interfaces/about';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { Projects } from '../../../interfaces/projects';

export interface ErrorResponse {
	code: string;
	extra: string;
	field: string;
	message: string;
}

@Component({
	selector: 'form-education',
	templateUrl: './form-education.component.html',
	styleUrls: ['./form-education.component.scss'],
})
export class FormEducationComponent implements OnInit {
	formGroup: FormGroup;
	private education: Observable<Education | Experiences | About | SoftSkills | Projects | null> =
		of(null);
	private readonly state: Education | undefined;
	public error: Array<ErrorResponse> | null = null;

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute,
		private routerState: Router
	) {
		this.state = <Education>this.routerState.getCurrentNavigation()?.extras.state;
		this.formGroup = new FormGroup(
			this.formHelper.getControls(this.componentToEdit, this.state)
		);
	}

	ngOnInit(): void {
		if (this.state === undefined) {
			this.education = this.dataService.findPersonData(this.formHelper.getId(this.router), <
				ComponentToEdit
			>{ education: true });
			this.education.subscribe({
				next: prop => {
					this.formGroup = new FormGroup(
						this.formHelper.getControls(this.componentToEdit, prop)
					);
				},
			});
		}
	}

	sucessfull: boolean = false;
	private readonly componentToEdit = <ComponentToEdit>{ education: true };

	onClickSubmit($event: MouseEvent) {
		if (this.formGroup.valid) {
			this.formHelper
				.submitForm(this.formGroup, this.componentToEdit, this.router)
				.subscribe({
					next: next => {
						this.sucessfull = true;
						console.log(next);
					},
					error: err => {
						console.log(err.error.details.errorMessage);
						this.error = err.error.details.errorMessage;
					},
				});
		}
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelper.checkError(this.formGroup, formControlName, errorName);
	}
}
