import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  private userPlaylist:Video[] = [];

  userPlayListObservable = new BehaviorSubject<Video[]>([]);

  constructor() { }

  addVideo = (video:Video) =>  {
    this.userPlaylist.push(video);
    this.userPlayListObservable.next(this.userPlaylist);
  }

  clearPlaylist = () => {
    this.userPlaylist = [];
    this.userPlayListObservable.next(this.userPlaylist);
  }

  getPlaylist = () => {
    return this.userPlaylist;
  }

  isDistinct = (video:Video) => {
    let distinct:boolean = true;
  
    this.userPlaylist.forEach(element => {
      if(element.id === video.id){
        console.log(element.id + "   " + video.id)
        distinct = false;
      }
    });

    return distinct;
  }

}

