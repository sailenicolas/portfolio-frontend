import { Component, Input, OnInit } from '@angular/core';
import { Experiences } from '../../interfaces/experiences';
import { FormGroup } from '@angular/forms';
import { TipoDeEmpleo } from '../../enums/tipo-de-empleo';

@Component({
	selector: 'app-list-experiencies',
	templateUrl: './list-experiencies.component.html',
	styleUrls: ['./list-experiencies.component.scss'],
})
export class ListExperienciesComponent implements OnInit {
	@Input('experiences')
	items!: Experiences[];
	testForm: FormGroup = new FormGroup({}, undefined, undefined);
	title: any;
	object = Object;
	tipoDeEmpleo = TipoDeEmpleo;

	constructor() {}

	ngOnInit(): void {}
}
