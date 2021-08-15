import { Component, OnInit } from '@angular/core';
import { DailyMotionServiceService } from 'src/app/services/daily-motion-service.service';
import Video from '../../models/video';
import { Subscription } from 'rxjs';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  videoListFromAPI:Video[] = [];
  dataSubscription = new Subscription();

  constructor(private videoService:DailyMotionServiceService, private userData:UserDataServiceService) { }

  ngOnInit(): void {
    this.searchBtnPressed();
  }

  ngOnDestroy = () => {
    this.dataSubscription.unsubscribe;
  }

  queryUpdated = (event:any) => {
    this.videoService.setQueryString(event.target.value);
    if(event.keyCode === 13){
      this.searchBtnPressed();
    }
  }

  searchBtnPressed = () => {
    this.dataSubscription = this.videoService.getVideosFromAPI().subscribe((data:any) => {  
      this.videoListFromAPI = data["list"];
    }); 

    this.videoListFromAPI.forEach(element => {
      if(!this.userData.isDistinct(element)){

      }
    });
  }
}
