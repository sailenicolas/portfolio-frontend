import { Component, OnInit } from '@angular/core';
import { TipoDeEmpleo } from '../../../enums/tipo-de-empleo';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { ComponentToEdit } from '../../../interfaces/component-to.edit';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AboutMe } from '../../../interfaces/about-me';
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
		Experiences | Education | AboutMe | SoftSkills | Projects | null
	> = of(null);

	constructor(
		private formHelper: FormHelperService,
		private dataService: DataService,
		private router: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.experiences = this.dataService.findPersonData(this.formHelper.getId(this.router), <
			ComponentToEdit
		>{ education: true });
		this.experiences.subscribe({
			next: prop => {
				this.formGroup = new FormGroup(
					this.formHelper.getControls(<ComponentToEdit>{ education: true }, prop)
				);
			},
		});
	}

	checkError(ubicacion: string, required: string) {
		return false;
	}

	onClickSubmit($event: any) {}
}
