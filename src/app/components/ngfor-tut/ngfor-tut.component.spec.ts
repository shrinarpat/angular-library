import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforTutComponent } from './ngfor-tut.component';

describe('NgforTutComponent', () => {
  let component: NgforTutComponent;
  let fixture: ComponentFixture<NgforTutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforTutComponent]
    });
    fixture = TestBed.createComponent(NgforTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
