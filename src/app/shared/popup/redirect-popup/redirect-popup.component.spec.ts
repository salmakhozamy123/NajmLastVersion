import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectPopupComponent } from './redirect-popup.component';

describe('RedirectPopupComponent', () => {
  let component: RedirectPopupComponent;
  let fixture: ComponentFixture<RedirectPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectPopupComponent]
    });
    fixture = TestBed.createComponent(RedirectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
