import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import Video from '../models/video';

@Injectable({
  providedIn: 'root'
})

export class DailyMotionServiceService {

  queryString:string = "";

  APIURL: URL = new URL(
    `https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=`
    );

  constructor(private http: HttpClient) { }

  getQueryString = ():string => {
    return this.queryString;
  }

  setQueryString = (query:string) => {
    this.queryString = query;
  }

  getVideosFromAPI(): Observable<Video[]> {
    console.log("fetching from api");
    var paramList = this.APIURL.searchParams;
    paramList.set('search', this.queryString);
    return this.http.get<Video[]>(this.APIURL.toString());
  }
}

 

