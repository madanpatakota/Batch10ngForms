import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaeDrivenComponent } from './templae-driven.component';

describe('TemplaeDrivenComponent', () => {
  let component: TemplaeDrivenComponent;
  let fixture: ComponentFixture<TemplaeDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplaeDrivenComponent]
    });
    fixture = TestBed.createComponent(TemplaeDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
