import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOfServiceComponent } from './term-of-service.component';

describe('TermOfServiceComponent', () => {
  let component: TermOfServiceComponent;
  let fixture: ComponentFixture<TermOfServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermOfServiceComponent]
    });
    fixture = TestBed.createComponent(TermOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
