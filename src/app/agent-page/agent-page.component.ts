
import { Component } from '@angular/core';
import { ToggleService } from '../toggle.service';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styleUrls: ['./agent-page.component.css']
})
export class AgentPageComponent implements OnInit{
documentImgFormat = ['image/jpeg','image/png','image/gif'];
  constructor(private toggleService:ToggleService){}
  toggle = false;
  docState = false;
imgFile:any = null;
videoFile:any = null
inputFile(event:any){
let fileEvent = event.target.files[0];
console.log(fileEvent)
let fileReader = new FileReader();
fileReader.readAsDataURL(fileEvent);

fileReader.onload = () => {
if(fileEvent.type == 'video/mp4'){
this.videoFile = fileReader.result;
this.imgFile = null;
}
  else if(fileEvent.type == 'image/jpeg' || fileEvent.type == 'image/png' || fileEvent.type == 'image/gif'){
this.imgFile = fileReader.result
this.videoFile = null;
  }

else {
  alert('Not Supported!')
}
}

this.docState = true
}

dragOver(event:Event){
event.preventDefault();
}
drop(dragEvent:DragEvent){
  dragEvent.preventDefault();
let fileEvent:any = dragEvent.dataTransfer?.files[0]
let fileReader = new FileReader();
fileReader.readAsDataURL(fileEvent)
fileReader.onload = () => {
  if(fileEvent.type == 'video/mp4'){
    this.videoFile = fileReader.result;
    this.imgFile = null;
    }
    this.documentImgFormat.forEach(format => {
      if(fileEvent.type == format){
    this.imgFile = fileReader.result
    this.videoFile = null;
      }
    
      else {
        alert('Format Not Supported!')
      }
    })
 }
 this.docState = true
}
  
ngOnInit(): void {
  this.toggleService.toggle.subscribe(res => {
    this.toggle = res;
  })
} 
}
