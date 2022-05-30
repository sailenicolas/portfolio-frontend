import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExperienciesComponent } from './list-experiencies.component';

describe('ListExperienciesComponent', () => {
  let component: ListExperienciesComponent;
  let fixture: ComponentFixture<ListExperienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExperienciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExperienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
