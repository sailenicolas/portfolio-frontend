import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../services/router-help.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from '../../services/form-helper.service';
import { TipoDeEmpleo } from '../../enums/tipo-de-empleo';
import { ComponentToEdit } from '../../interfaces/component-to.edit';

@Component({
	selector: 'app-portfolio-add-form',
	templateUrl: './portfolio-add-form.component.html',
	styleUrls: ['./portfolio-add-form.component.scss'],
})
export class PortfolioAddForm implements OnInit {
	data: any;
	experiences: ComponentToEdit = {
		experience: false,
		education: false,
		about: false,
		softskills: false,
		projects: false,
	};
	formGroup: FormGroup;
	Typed: string;
	dd = TipoDeEmpleo;

	constructor(
		public routerService: RouterHelpService,
		private router: ActivatedRoute,
		private formHelperService: FormHelperService
	) {
		this.formGroup = new FormGroup({});
		this.Typed = 'Agregar';
	}

	ngOnInit(): void {
		this.routerService
			.compareArray(
				['education', 'experiences', 'about', 'projects', 'softskills'],
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
	}

	onClickSubmit($event: MouseEvent) {
		console.log(this.formGroup.value);
	}

	checkError(formControlName: string, errorName: string) {
		return this.formHelperService.checkError(this.formGroup, formControlName, errorName);
	}
}
