import { Component, OnInit } from '@angular/core';
import { TipoDeEmpleo } from '../../../enums/tipo-de-empleo';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { About } from '../../../interfaces/about';
import { Projects } from '../../../interfaces/projects';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { Education } from '../../../interfaces/education';
import { Experiences } from '../../../interfaces/experiences';

@Component({
	selector: 'form-experiences',
	templateUrl: './form-experiences.component.html',
	styleUrls: ['./form-experiences.component.scss'],
})
export class FormExperiencesComponent implements OnInit {
	tipoDeEmpleo = TipoDeEmpleo;
	formGroup!: FormGroup;
	private experiences: Observable<
		Experiences | Education | About | SoftSkills | Projects | null
	> = of(null);
	private state: Experiences | undefined;

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute,
		private routerState: Router
	) {
		this.state = <Experiences>this.routerState.getCurrentNavigation()?.extras.state;
		this.formGroup = new FormGroup(
			this.formHelper.getControls(this.componentToEdit, this.state)
		);
	}

	ngOnInit(): void {
		if (this.state === undefined && this.routerState.url.includes('edit')) {
			this.experiences = this.dataService.findPersonData(this.formHelper.getId(this.router), <
				ComponentToEdit
			>{ education: true });
			this.experiences.subscribe({
				next: prop => {
					this.formGroup = new FormGroup(
						this.formHelper.getControls(this.componentToEdit, prop)
					);
				},
			});
		} else if (this.routerState.url.includes('add')) {
			this.formHelper.addForm(this.formGroup, this.componentToEdit).subscribe({
				next: next => {
					this.sucessfull = true;
					console.log(next);
				},
				error: err => {
					console.log(err.error.details.errorMessage);
				},
			});
		}
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelper.checkError(this.formGroup, formControlName, errorName);
	}

	sucessfull: boolean = false;
	private readonly componentToEdit = <ComponentToEdit>{ experience: true };

	onClickSubmit($event: MouseEvent) {
		if (this.formGroup.valid && this.routerState.url.includes('edit')) {
			this.formHelper.putForm(this.formGroup, this.componentToEdit, this.router).subscribe({
				next: () => {
					this.sucessfull = true;
				},
			});
		} else if (this.routerState.url.includes('add')) {
			this.formHelper.addForm(this.formGroup, this.componentToEdit).subscribe({
				next: next => {
					this.sucessfull = true;
					console.log(next);
				},
				error: err => {
					console.log(err.error.details.errorMessage);
				},
			});
		}
	}

	isCurrentUrl(url: string) {
		return this.routerState.url.includes(url);
	}
}
