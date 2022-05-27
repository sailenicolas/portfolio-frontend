import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { Observable, of } from 'rxjs';
import { Experiences } from '../../../interfaces/experiences';
import { Projects } from '../../../interfaces/projects';
import { SoftSkills } from '../../../interfaces/soft-skills';
import { AboutMe } from '../../../interfaces/about-me';
import { Education } from '../../../interfaces/education';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'form-soft-skills',
	templateUrl: './form-soft-skills.component.html',
	styleUrls: ['./form-soft-skills.component.scss'],
})
export class FormSoftSkillsComponent implements OnInit {
	formGroup: FormGroup;
	private softskill: Observable<
		Experiences | Education | AboutMe | SoftSkills | Projects | null
	> = of(null);

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute
	) {
		this.formGroup = new FormGroup(
			this.formHelper.getControls(<ComponentToEdit>{ softskills: true }, null)
		);
	}

	ngOnInit(): void {
		this.softskill = this.dataService.findPersonData(this.formHelper.getId(this.router), <
			ComponentToEdit
		>{ education: true });
		this.softskill.subscribe({
			next: prop => {
				this.formGroup = new FormGroup(
					this.formHelper.getControls(<ComponentToEdit>{ education: true }, prop)
				);
			},
		});
	}

	checkError(descripcion: string, minlength: string) {
		return false;
	}

	onClickSubmit($event: MouseEvent) {}
}
