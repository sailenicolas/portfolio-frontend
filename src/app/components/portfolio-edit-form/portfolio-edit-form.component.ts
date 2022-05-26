import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../services/router-help.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../services/form-helper.service';
import { DataService } from '../../services/data.service';
import { Experiences } from '../../interfaces/experiences';
import { Education } from '../../interfaces/education';
import { TipoDeEmpleo } from '../../enums/tipo-de-empleo';
import { ComponentToEdit } from '../../interfaces/component-to.edit';
import { AboutMe } from '../../interfaces/about-me';
import { SoftSkills } from '../../interfaces/soft-skills';
import { Projects } from '../../interfaces/projects';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-portfolio-edit-form',
	templateUrl: './portfolio-edit-form.component.html',
	styleUrls: ['./portfolio-edit-form.component.scss'],
})
export class PortfolioEditForm implements OnInit {
	experiences: ComponentToEdit = {
		experience: false,
		education: false,
		about: false,
		softskills: false,
		projects: false,
	};
	formGroup: FormGroup;
	private id: number = -1;
	private personData: Observable<
		Experiences | Education | AboutMe | SoftSkills | Projects | null
	> = of(null);
	Typed: string;
	dd = TipoDeEmpleo;

	constructor(
		public routerService: RouterHelpService,
		private router: ActivatedRoute,
		private formHelperService: FormHelperService,
		private dataService: DataService
	) {
		this.Typed = 'Editar';
		this.routerService
			.compareArray(
				['education', 'experiences', 'about', 'softskills', 'projects'],
				this.router
			)
			.subscribe({
				next: ({ name, result }) => {
					let expt = this.experiences;
					type am = keyof typeof expt;
					let myVar = name as am;
					this.experiences[myVar] = result;
				},
			});
		this.router.paramMap.subscribe({
			next: (params: ParamMap) => {
				this.id = Number(params.get('id'));
			},
		});
		this.formGroup = new FormGroup(this.formHelperService.getControls(this.experiences, null));
	}

	ngOnInit(): void {
		this.personData = this.dataService.findPersonData(this.id, this.experiences);
		this.personData.subscribe({
			next: vale => {
				this.formGroup = new FormGroup(
					this.formHelperService.getControls(this.experiences, vale)
				);
			},
		});
	}

	onClickSubmit($event: MouseEvent) {
		console.log('is not gonna work');
		console.log(this.formGroup.valid);
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelperService.checkError(this.formGroup, formControlName, errorName);
	}
}
