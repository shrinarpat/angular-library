import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplatesComponent } from './ng-templates.component';

describe('NgTemplatesComponent', () => {
  let component: NgTemplatesComponent;
  let fixture: ComponentFixture<NgTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTemplatesComponent]
    });
    fixture = TestBed.createComponent(NgTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
