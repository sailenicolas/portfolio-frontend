import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '../../../services/form-helper.service';
import { FormGroup } from '@angular/forms';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { Education } from '../../../interfaces/education';
import { Projects } from '../../../interfaces/projects';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { About } from '../../../interfaces/about';

@Component({
	selector: 'form-projects',
	templateUrl: './form-projects.component.html',
	styleUrls: ['./form-projects.component.scss'],
})
export class FormProjectsComponent implements OnInit {
	formGroup!: FormGroup;
	private project: Observable<Experiences | Education | About | SoftSkills | Projects | null> =
		of(null);
	private state: Projects | undefined;

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute,
		private routerState: Router
	) {
		this.state = <Projects>this.routerState.getCurrentNavigation()?.extras.state;
		this.formGroup = new FormGroup(
			this.formHelper.getControls(this.componentToEdit, this.state)
		);
	}

	ngOnInit(): void {
		if (this.state != undefined) {
			this.formGroup = new FormGroup(
				this.formHelper.getControls(this.componentToEdit, <Projects>this.state)
			);
		} else {
			this.project = this.dataService.findPersonData(this.formHelper.getId(this.router), <
				ComponentToEdit
			>{ education: true });
			this.project.subscribe({
				next: prop => {
					this.formGroup = new FormGroup(
						this.formHelper.getControls(this.componentToEdit, prop)
					);
				},
			});
		}
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelper.checkError(this.formGroup, formControlName, errorName);
	}

	sucessfull: boolean = false;
	private readonly componentToEdit = <ComponentToEdit>{ projects: true };

	onClickSubmit($event: MouseEvent) {
		if (this.formGroup.valid) {
			this.formHelper
				.submitForm(this.formGroup, this.componentToEdit, this.router)
				.subscribe({
					next: () => {
						this.sucessfull = true;
					},
				});
		}
	}
}