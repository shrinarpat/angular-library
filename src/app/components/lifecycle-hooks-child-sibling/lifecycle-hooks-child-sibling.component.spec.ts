import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksChildSiblingComponent } from './lifecycle-hooks-child-sibling.component';

describe('LifecycleHooksChildSiblingComponent', () => {
  let component: LifecycleHooksChildSiblingComponent;
  let fixture: ComponentFixture<LifecycleHooksChildSiblingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleHooksChildSiblingComponent]
    });
    fixture = TestBed.createComponent(LifecycleHooksChildSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
