import { Component, OnInit } from '@angular/core';
import { FormHelperService } from '../../../services/form-helper.service';
import { FormGroup } from '@angular/forms';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { Education } from '../../../interfaces/education';
import { Projects } from '../../../interfaces/projects';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { AboutMe } from '../../../interfaces/about-me';

@Component({
	selector: 'form-projects',
	templateUrl: './form-projects.component.html',
	styleUrls: ['./form-projects.component.scss'],
})
export class FormProjectsComponent implements OnInit {
	formGroup!: FormGroup;
	private project: Observable<Experiences | Education | AboutMe | SoftSkills | Projects | null> =
		of(null);

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.project = this.dataService.findPersonData(this.formHelper.getId(this.router), <
			ComponentToEdit
		>{ education: true });
		this.project.subscribe({
			next: prop => {
				this.formGroup = new FormGroup(
					this.formHelper.getControls(<ComponentToEdit>{ education: true }, prop)
				);
			},
		});
	}

	onClickSubmit($event: any) {}

	checkError(titulo: string, required: string) {
		return false;
	}
}
