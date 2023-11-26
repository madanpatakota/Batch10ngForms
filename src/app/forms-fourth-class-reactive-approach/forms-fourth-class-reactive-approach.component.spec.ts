import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFourthClassReactiveApproachComponent } from './forms-fourth-class-reactive-approach.component';

describe('FormsFourthClassReactiveApproachComponent', () => {
  let component: FormsFourthClassReactiveApproachComponent;
  let fixture: ComponentFixture<FormsFourthClassReactiveApproachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsFourthClassReactiveApproachComponent]
    });
    fixture = TestBed.createComponent(FormsFourthClassReactiveApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
