import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEditForm } from './portfolio-edit-form.component';

describe('DialogEditionBasedComponent', () => {
	let component: PortfolioEditForm;
	let fixture: ComponentFixture<PortfolioEditForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PortfolioEditForm],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PortfolioEditForm);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
