import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Education } from '../../../interfaces/education';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { AboutMe } from '../../../interfaces/about-me';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { Projects } from '../../../interfaces/projects';

@Component({
	selector: 'form-education',
	templateUrl: './form-education.component.html',
	styleUrls: ['./form-education.component.scss'],
})
export class FormEducationComponent implements OnInit {
	formGroup: FormGroup;
	private education: Observable<
		Education | Experiences | AboutMe | SoftSkills | Projects | null
	> = of(null);

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute
	) {
		this.formGroup = new FormGroup(
			this.formHelper.getControls(<ComponentToEdit>{ education: true }, null)
		);
		console.log('algo + +++');
	}

	ngOnInit(): void {
		this.education = this.dataService.findPersonData(this.formHelper.getId(this.router), <
			ComponentToEdit
		>{ education: true });
		this.education.subscribe({
			next: prop => {
				this.formGroup = new FormGroup(
					this.formHelper.getControls(<ComponentToEdit>{ education: true }, prop)
				);
			},
		});
	}

	onClickSubmit($event: MouseEvent) {}
}
