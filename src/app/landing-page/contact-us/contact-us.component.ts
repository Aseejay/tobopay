import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  dues: any[] | undefined;
  selectedDues: any | undefined;
  visible: boolean = false;
  visibleTwo: boolean = false;
  fullName = '';
  reason = '';
  number = '';
  email = '';
  message = '';
  isLoading = false;
  error = false;
  constructor(private http: HttpClient) {}

  submit() {
    this.isLoading = true;
    this.visible = true;
    this.http
      .post('https://adtest.tobopay.live/api/v2/contact', {
        full_name: this.fullName,
        reason: this.selectedDues.name,
        email: this.email,
        phoneNumber: this.number,
        message: this.message,
      })
      .subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.number = '';
          this.email = '';
          this.message = '';
          this.fullName = '';
          this.selectedDues = null;
        },
        error: (res: any) => {
          this.isLoading = false;
          this.error = true;
        },
      });
  }
  cancel() {
    this.visibleTwo = false;
    this.visible = false;
  }
  ngOnInit() {
    this.dues = [
      { name: 'Enquiry' },
      { name: 'Request New Feature' },
      { name: 'Others' },
    ];
  }
}
