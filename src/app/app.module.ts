import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page.component';
import { ListingBoxComponent } from './components/listing-box/listing-box.component';
import { VideoComponentComponent } from './components/video-component/video-component.component';
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PlaylistPageComponent,
    ListingBoxComponent,
    VideoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
