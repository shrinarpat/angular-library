import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTutComponent } from './bootstrap-tut.component';

describe('BootstrapTutComponent', () => {
  let component: BootstrapTutComponent;
  let fixture: ComponentFixture<BootstrapTutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapTutComponent]
    });
    fixture = TestBed.createComponent(BootstrapTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
