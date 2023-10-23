import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core'
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent  implements OnInit{
constructor(private toggleService:ToggleService, private router:Router){}


toggler(){
  this.toggleService.toggle.next(false)
}
nav(url:string): boolean{
  return this.router.url == url || this.router.url == url + '/agent' || this.router.url == url + '/term-of-service#Introduction' || 
  this.router.url == url + '/privacy-policy#Introduction';

  }

ngOnInit(): void {
  
}
}
