import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesTutComponent } from './observables-tut.component';

describe('ObservablesTutComponent', () => {
  let component: ObservablesTutComponent;
  let fixture: ComponentFixture<ObservablesTutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablesTutComponent]
    });
    fixture = TestBed.createComponent(ObservablesTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
