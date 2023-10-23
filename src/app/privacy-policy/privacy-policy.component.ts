import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { ToggleService } from '../toggle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private toggleService:ToggleService, private router:Router){}
toggle:boolean = false;
nav(url:string) : boolean{
  return this.router.url == url;
    }
  
  ngOnInit(): void {
    this.toggleService.toggle.subscribe(res => {
      this.toggle = res;
    })
  }
}
