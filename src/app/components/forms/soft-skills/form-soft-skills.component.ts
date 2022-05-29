import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { Projects } from '../../../interfaces/projects';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { About } from '../../../interfaces/about';
import { Education } from '../../../interfaces/education';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorGenericResponse } from '../../../interfaces/errorGenericResponse';

@Component({
	selector: 'form-soft-skills',
	templateUrl: './form-soft-skills.component.html',
	styleUrls: ['./form-soft-skills.component.scss'],
})
export class FormSoftSkillsComponent implements OnInit {
	formGroup: FormGroup;
	private softskill: Observable<Experiences | Education | About | SoftSkills | Projects | null> =
		of(null);
	private state: SoftSkills | undefined;

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute,
		private routerState: Router
	) {
		this.state = <SoftSkills>this.routerState.getCurrentNavigation()?.extras.state;
		this.formGroup = new FormGroup(
			this.formHelper.getControls(this.componentToEdit, this.state)
		);
	}

	ngOnInit(): void {
		if (this.state === undefined && this.routerState.url.includes('edit')) {
			this.softskill = this.dataService.findPersonData(this.formHelper.getId(this.router), <
				ComponentToEdit
			>{ softskills: true });
			this.softskill.subscribe({
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
	private readonly componentToEdit = <ComponentToEdit>{ softskills: true };
	public error: ErrorGenericResponse | null = null;

	onClickSubmit($event: MouseEvent) {
		if (this.formGroup.valid && this.isCurrentUrl('edit')) {
			this.formHelper.putForm(this.formGroup, this.componentToEdit, this.router).subscribe({
				next: vale => {
					this.sucessfull = true;
					this.routerState.navigate(['/portfolio']);
				},
				error: err => {
					this.error = err.error;
				},
			});
		} else if (this.isCurrentUrl('add')) {
			this.formHelper.addForm(this.formGroup, this.componentToEdit).subscribe({
				next: next => {
					this.sucessfull = true;
					this.routerState.navigate(['/portfolio']);
				},
				error: err => {
					this.error = err.error;
				},
			});
		} else if (this.routerState.url.includes('delete')) {
			this.formHelper.delForm(this.componentToEdit, this.router).subscribe({
				next: next => {
					this.sucessfull = true;
					this.routerState.navigate(['/portfolio']);
				},
				error: err => {
					this.error = err.error;
				},
			});
		}
	}

	isCurrentUrl(url: string) {
		return this.routerState.url.includes(url);
	}
}
