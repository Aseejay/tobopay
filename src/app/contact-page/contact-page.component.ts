import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{
  constructor(private toggleService:ToggleService){}
  toggle = false;

ngOnInit(): void {
  this.toggleService.toggle.subscribe(res => {
    this.toggle = res;
  })
} 
}
