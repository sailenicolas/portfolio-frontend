import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteGenericComponent } from './form-delete-generic.component';

describe('FormDeleteGenericComponent', () => {
	let component: FormDeleteGenericComponent;
	let fixture: ComponentFixture<FormDeleteGenericComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormDeleteGenericComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormDeleteGenericComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
