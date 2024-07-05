import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent {
  dues: any[] | undefined;
  selectedDues: any | undefined;
  isFetching = false;
  username = '';
  identity = '';
  firstName = '';
  lastName = '';
  email = '';
  img: any = '';
  firstStage = true;
  secondStage = false;
  dataUrl = '';
  inputField = [1, 2, 3, 4, 5];
  activeIndex = -1;
  documentImgFormat = ['image/jpeg', 'image/png', 'image/gif'];
  constructor(private http: HttpClient) {}
  toggle = false;
  docState = false;
  imgFile: any = null;
  inputFile(event: any) {
    let fileEvent = event.target.files[0];
    this.img = fileEvent;
    console.log(fileEvent);
    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileEvent);
    fileReader.onload = () => {
      if (
        fileEvent.type == 'image/jpeg' ||
        fileEvent.type == 'image/png' ||
        fileEvent.type == 'image/gif'
      ) {
        if (fileEvent.size <= 10485760) {
          this.imgFile = fileReader.result;
          console.log(this.img);
        }
      } else {
        alert('Not Supported!');
      }
    };

    this.docState = true;
  }

  dragOver(event: Event) {
    event.preventDefault();
  }
  drop(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    let fileEvent: any = dragEvent.dataTransfer?.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileEvent);
    fileReader.onload = () => {
      this.documentImgFormat.forEach((format) => {
        if (fileEvent.type == format) {
          if (fileEvent.size <= 10485760) {
            this.imgFile = fileReader.result;
          }
        } else {
          alert('Format Not Supported!');
        }
      });
    };
    this.docState = true;
  }
  nav(active: number) {
    this.activeIndex = active;
  }
  submit(form: NgForm) {
    this.isFetching = true;

    const headers = new HttpHeaders({});
    headers.append('Content-Type', 'multipart/form-data');
    const formData = new FormData();
    formData.append('file', this.img);
    ({ 'Content-Type': 'multipart/form-data' });
    console.log(form.value);
    if (this.firstStage) {
      this.identity = form.value.identity;
      this.username = form.value.username;
      this.http
        .post(
          'https://adtest.tobopay.live/api/v2/agent/image/upload/' +
            this.username.toLowerCase(),
          formData,
          { headers }
        )
        .subscribe({
          next: (res: any) => {
            alert('Successful!');
            this.isFetching = false;
            this.dataUrl = res.data.url;
            console.log(res);
            this.firstStage = false;
            this.secondStage = true;
          },
          error: (res: any) => {
            alert('An Error Occured!');
            console.log(this.img.name);
            this.isFetching = false;
          },
        });
    } else {
      this.isFetching = true;
      console.log(form.value.identity);
      console.log(this.identity);
      console.log(this.username);
      console.log(form.value);
      console.log(this.dataUrl);
      this.http
        .post('https://adtest.tobopay.live/api/v2/agent/apply', {
          firstname: form.value.firstName,
          lastname: form.value.lastName,
          username: this.username,
          email: form.value.email,
          identification_type: this.selectedDues.name,
          identification_url: this.dataUrl,
        })
        .subscribe({
          next: (res: any) => {
            alert('successful');
            console.log(res);
            this.isFetching = false;
          },
          error: (res: any) => {
            alert('An Error Ocuured!');
            console.log(res);
            this.isFetching = false;
          },
        });
    }
  }

  ngOnInit() {
    this.dues = [
      { name: 'International Passport' },
      { name: 'Voters Card' },
      { name: 'Drivers License' },
      { name: 'Nimc' },
    ];
  }
}
