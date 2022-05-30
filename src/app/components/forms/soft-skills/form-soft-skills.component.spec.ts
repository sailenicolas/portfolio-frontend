import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSoftSkillsComponent } from './form-soft-skills.component';

describe('SoftSkillsComponent', () => {
	let component: FormSoftSkillsComponent;
	let fixture: ComponentFixture<FormSoftSkillsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormSoftSkillsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormSoftSkillsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
