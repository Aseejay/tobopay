import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({
        height: '0',
        opacity: 0
      })),
      state('*', style({
        height: '*',
        opacity: 1
      })),
      transition('void => *', [
        animate('150ms ease-out')
      ]),
      transition('* => void', [
        animate('150ms ease-in')
      ])
    ])
  ]
})
export class TermsOfServiceComponent implements OnInit{
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
constructor(private router:Router){

}

activeClass(url:string){
if(this.router.url == url ){
return true
}

else {
  return false
}
}


ngOnInit() {
   
}

}
