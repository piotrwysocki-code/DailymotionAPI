import { Component, Input, OnInit } from '@angular/core';
import Video from '../../models/video';
import { EventEmitter } from '@angular/core';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit {

  @Input()
  video!: Video; 
  @Input() showAddBtn:boolean = true;

  addBtnText:string = "ADD TO PLAYLIST";
  isDistinct:boolean = true;
  externalLink:string = "https://www.dailymotion.com/video/";
  externalLinkUser:string = "https://www.dailymotion.com/";

  
  constructor(private userDataService:UserDataServiceService) { }

  ngOnInit(): void {
    this.isDistinct = this.userDataService.isDistinct(this.video);
    this.externalLink += this.video.id;
    this.externalLinkUser += this.video['owner.username'];
  }

  addBtnClicked = () => {
    this.isDistinct = false;
    this.userDataService.addVideo(this.video);
    this.addBtnText = "ALREADY ADDED";
    console.log("hello");
  }
  

  

}
