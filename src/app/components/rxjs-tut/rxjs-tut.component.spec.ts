import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTutComponent } from './rxjs-tut.component';

describe('RxjsTutComponent', () => {
  let component: RxjsTutComponent;
  let fixture: ComponentFixture<RxjsTutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsTutComponent]
    });
    fixture = TestBed.createComponent(RxjsTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
