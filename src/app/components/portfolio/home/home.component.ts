import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Experiences } from '../../../interfaces/experiences';
import { Education } from '../../../interfaces/education';
import { Person } from '../../../interfaces/person';
import { AboutMe } from '../../../interfaces/about-me';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	items: Person;
	about: AboutMe;

	constructor(private dataService: DataService) {
		this.items = {
			about: {
				about_me: '',
				image: '',
				name: '',
			},
			experiences: <Experiences[]>[],
			education: <Education[]>[],
		};
		this.about = this.dataService.fetchAboutMe();
	}

	ngOnInit(): void {
		this.dataService.getPersonsData().subscribe({
			next: value => {
				this.items = value;
			},
		});
	}
}
