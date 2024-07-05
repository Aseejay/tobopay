import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecondComponent } from './footer-second.component';

describe('FooterSecondComponent', () => {
  let component: FooterSecondComponent;
  let fixture: ComponentFixture<FooterSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSecondComponent]
    });
    fixture = TestBed.createComponent(FooterSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
