import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentsComponent } from './ng-contents.component';

describe('NgContentsComponent', () => {
  let component: NgContentsComponent;
  let fixture: ComponentFixture<NgContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentsComponent]
    });
    fixture = TestBed.createComponent(NgContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
