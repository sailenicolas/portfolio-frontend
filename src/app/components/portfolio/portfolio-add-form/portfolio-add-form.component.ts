import { Component, OnInit } from '@angular/core';
import { RouterHelpService } from '../../../services/router-help.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-portfolio-add-form',
	templateUrl: './portfolio-add-form.component.html',
	styleUrls: ['./portfolio-add-form.component.scss'],
})
export class PortfolioAddForm implements OnInit {
	data: any;
	experiences: boolean;
	education: boolean;

	constructor(public routerService: RouterHelpService, private router: ActivatedRoute) {
		this.experiences = false;
		this.education = false;
	}

	ngOnInit(): void {
		this.routerService.compare('education', this.router).subscribe({
			next: item => {
				this.education = item;
			},
		});
		this.routerService.compare('experiences', this.router).subscribe({
			next: item => {
				this.experiences = item;
			},
		});
	}
}
