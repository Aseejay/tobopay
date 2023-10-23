import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { ToggleService } from '../toggle.service';
@Component({
  selector: 'app-term-of-service',
  templateUrl: './term-of-service.component.html',
  styleUrls: ['./term-of-service.component.css']
})
export class TermOfServiceComponent implements OnInit{
  toggle:boolean = false
constructor(private router:Router, private toggleService:ToggleService){}

  nav(url:string) : boolean{
return this.router.url == url;
  }

  ngOnInit(): void {
    this.nav(this.router.url)
    this.toggleService.toggle.subscribe(res => {
      this.toggle = res;
    })
   
  }
}
