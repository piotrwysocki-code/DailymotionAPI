import { Component, Input, OnInit } from '@angular/core';
import Video from '../../models/video';

@Component({
  selector: 'app-listing-box',
  templateUrl: './listing-box.component.html',
  styleUrls: ['./listing-box.component.css']
})
export class ListingBoxComponent implements OnInit {

  @Input() videoList:Video[] = [];
  @Input() showBtns:boolean = true;

  constructor() { }

  ngOnInit(): void {

  }
 
}
