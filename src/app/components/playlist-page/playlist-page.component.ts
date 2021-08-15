import { Component, OnInit } from '@angular/core';
import Video from '../../models/video';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {

  myPlaylist:Video[] = [];
  dataSubscription = new Subscription();

  constructor(private userData:UserDataServiceService) { }

  ngOnInit(): void {
    this.dataSubscription = this.userData.userPlayListObservable.subscribe((data:any) => {  
      this.myPlaylist = data;
    }); 
  }

  ngOnDestroy = () => {
    this.dataSubscription.unsubscribe;
  }

  clearBtnClicked = () => {
    this.userData.clearPlaylist();
  }

}
