import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyOfPolicyComponent } from './privacy-of-policy.component';

describe('PrivacyOfPolicyComponent', () => {
  let component: PrivacyOfPolicyComponent;
  let fixture: ComponentFixture<PrivacyOfPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyOfPolicyComponent]
    });
    fixture = TestBed.createComponent(PrivacyOfPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
