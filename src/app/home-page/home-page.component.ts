import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { ToggleService } from '../toggle.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private toggleService:ToggleService, private http:HttpClient){}
messageBox = true;
toggle = false;
cancelMessage(){
  this.messageBox = false;
}
ngOnInit(): void {
  let header = new HttpHeaders({'accept':'application/json','Content-Type': 'application/json'})
setTimeout(() => {
  let confirmation =  confirm('Join our email community!')
  if(confirmation){
  let email = prompt('Enter your email address');
  let name = prompt('Enter name');
  if(email && name){
this.http.post('https://tobo-ad.sendzap.io/api/v1/subscribe',{name:name, email:email}, {headers:header}).subscribe(
  {
    next: (res:any) => {
      alert(res.message)
    },
    error: (res:any) => {
      alert('Enter a valid email address!')
    }
  }
)
  }
  }
}, 9000);
  this.toggleService.toggle.subscribe(res => {
    this.toggle = res;
  })
  this.messageBox = true;
  
}
}
