import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentsChildComponent } from './ng-contents-child.component';

describe('NgContentsChildComponent', () => {
  let component: NgContentsChildComponent;
  let fixture: ComponentFixture<NgContentsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentsChildComponent]
    });
    fixture = TestBed.createComponent(NgContentsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
