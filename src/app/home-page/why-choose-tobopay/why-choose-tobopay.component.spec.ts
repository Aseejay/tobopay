import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseTobopayComponent } from './why-choose-tobopay.component';

describe('WhyChooseTobopayComponent', () => {
  let component: WhyChooseTobopayComponent;
  let fixture: ComponentFixture<WhyChooseTobopayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyChooseTobopayComponent]
    });
    fixture = TestBed.createComponent(WhyChooseTobopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
