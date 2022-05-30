import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProjectsComponent } from './form-projects.component';

describe('ProjectsComponent', () => {
	let component: FormProjectsComponent;
	let fixture: ComponentFixture<FormProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormProjectsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
