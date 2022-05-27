import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { Observable, of } from 'rxjs';
import { Education } from 'src/app/interfaces/education';
import { Experiences } from 'src/app/interfaces/experiences';
import { AboutMe } from 'src/app/interfaces/about-me';
import { SoftSkills } from 'src/app/interfaces/soft-skills';
import { Projects } from 'src/app/interfaces/projects';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'form-about-me',
	templateUrl: './form-about-me.component.html',
	styleUrls: ['./form-about-me.component.scss'],
})
export class FormAboutMeComponent implements OnInit {
	formGroup!: FormGroup;
	private about: Observable<Experiences | Education | AboutMe | SoftSkills | Projects | null> =
		of(null);

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.about = this.dataService.findPersonData(this.formHelper.getId(this.router), <
			ComponentToEdit
		>{ education: true });
		this.about.subscribe({
			next: prop => {
				this.formGroup = new FormGroup(
					this.formHelper.getControls(<ComponentToEdit>{ education: true }, prop)
				);
			},
		});
	}

	checkError(sobremi: string, required: string) {
		return false;
	}

	onClickSubmit($event: any) {}
}
