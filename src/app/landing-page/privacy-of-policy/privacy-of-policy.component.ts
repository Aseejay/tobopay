import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-privacy-of-policy',
  templateUrl: './privacy-of-policy.component.html',
  styleUrls: ['./privacy-of-policy.component.css'],
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
export class PrivacyOfPolicyComponent {
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
