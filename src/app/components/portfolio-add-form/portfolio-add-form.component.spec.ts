import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAddForm } from './portfolio-add-form.component';

describe('DialogAddingBasedComponent', () => {
	let component: PortfolioAddForm;
	let fixture: ComponentFixture<PortfolioAddForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PortfolioAddForm],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PortfolioAddForm);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
