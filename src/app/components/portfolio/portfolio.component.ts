import { Component, OnInit } from '@angular/core';
import { Person as PersonInterface } from '../../interfaces/person';
import { DataService } from '../../services/data.service';
import { Person } from 'src/app/models/person';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
	items: PersonInterface;

	constructor(private dataService: DataService) {
		this.items = new Person(
			0,
			'',
			'',
			{ sobremi: '', imagen: '', nombre: '', header: '', id: 0, email: '' },
			[],
			[],
			[],
			[]
		);
	}

	ngOnInit(): void {
		this.dataService.getPersonsData().subscribe({
			next: value => {
				this.items = value;
			},
			error: (err: Error) => {
				console.log(err.message);
				console.log(err.message);
			},
		});
	}
}
