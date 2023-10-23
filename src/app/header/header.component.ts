import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { ToggleService } from '../toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

constructor(private toggleService:ToggleService, private router:Router){}

nav(url:string): boolean{
  return this.router.url == url
 || this.router.url == url + '/agent' ||
this.router.url == url + '/term-of-service#Definitions' || 
 this.router.url == url + '/term-of-service#Introduction'  || 
 this.router.url == url + '/term-of-service#User-obligations' 
 || 
 this.router.url == url + '/term-of-service#Service-charges' 
 || 
 this.router.url == url + '/term-of-service#Security-of-transactions' 
 || 
 this.router.url == url + '/term-of-service#Termination-of-service'  ||
 this.router.url == url + '/term-of-service#Governing-law'  || 
 this.router.url == url + '/term-of-service#Dispute-resolution' ||
 this.router.url == url + '/term-of-service#Governing-law'  || 
 this.router.url == url + '/term-of-service#Modifications' 
 || 
 this.router.url == url + '/term-of-service#User-eligibility' 
 || 
 this.router.url == url + '/term-of-service#Conclusion' 
 || 
 this.router.url == url + '/privacy-policy#Introduction' 
 || 
 this.router.url == url + '/privacy-policy#Collection-of-Personal-Information' 
 || 
 this.router.url == url + '/privacy-policy#Use-of-Personal-Information' 
 || 
 this.router.url == url + '/privacy-policy#Changes-to-Privacy-Policy' 
  || 
 this.router.url == url + '/privacy-policy#Access-to-Personal-Information' 
 || 
 this.router.url == url + '/privacy-policy#Retention-of-Personal-Information' 
 || 
 this.router.url == url + '/privacy-policy#Changes-to-Privacy-Policy' 
 || 
 this.router.url == url + '/privacy-policy#Contact-Information' 

}
  toggler(){
    this.toggleService.toggle.next(true)
  }

  ngOnInit(): void {


  }
}
