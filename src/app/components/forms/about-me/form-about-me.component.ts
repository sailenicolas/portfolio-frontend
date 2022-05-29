import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { Observable, of } from 'rxjs';
import { Education } from 'src/app/interfaces/education';
import { Experiences } from 'src/app/interfaces/experiences';
import { About } from 'src/app/interfaces/about';
import { SoftSkills } from 'src/app/interfaces/soft-skills';
import { Projects } from 'src/app/interfaces/projects';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'form-about',
	templateUrl: './form-about-me.component.html',
	styleUrls: ['./form-about-me.component.scss'],
})
export class FormAboutMeComponent implements OnInit {
	formGroup!: FormGroup;
	private about: Observable<Experiences | Education | About | SoftSkills | Projects | null> =
		of(null);
	private state: About | undefined;

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute,
		private routerState: Router
	) {
		this.state = <About>this.routerState.getCurrentNavigation()?.extras.state;
		this.formGroup = new FormGroup(
			this.formHelper.getControls(this.componentToEdit, this.state)
		);
	}

	ngOnInit(): void {
		if (this.state === undefined) {
			this.about = this.dataService.findPersonData(this.formHelper.getId(this.router), <
				ComponentToEdit
			>{ about: true });
			this.about.subscribe({
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
	private readonly componentToEdit = <ComponentToEdit>{ about: true };

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
