import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../../services/router-help.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../../services/form-helper.service';
import { DataService } from '../../../services/data.service';
import { Experiences } from '../../../interfaces/experiences';
import { Education } from '../../../interfaces/education';
import { TipoDeEmpleo } from '../../../enums/tipo-de-empleo';

@Component({
	selector: 'app-portfolio-edit-form',
	templateUrl: './portfolio-edit-form.component.html',
	styleUrls: ['./portfolio-edit-form.component.scss'],
})
export class PortfolioEditForm implements OnInit {
	experiences: {
		experience: boolean;
		education: boolean;
		about: boolean;
	} = {
		experience: false,
		education: false,
		about: false,
	};
	formGroup: FormGroup;
	private id: number = -1;
	private personData: Experiences | Education | null = null;
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
			.compareArray(['education', 'experiences', 'about'], this.router)
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
		this.formGroup = new FormGroup({});
	}

	ngOnInit(): void {
		this.personData = this.dataService.findPersonData(this.id, this.experiences);
		this.formHelperService.setControls(this.formGroup, this.personData, this.experiences);
	}

	onClickSubmit($event: MouseEvent) {
		console.log('is not gonna work');
		console.log(this.formGroup.valid, this.formGroup.controls['cargo'].errors?.['required']);
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelperService.checkError(this.formGroup, formControlName, errorName);
	}
}
