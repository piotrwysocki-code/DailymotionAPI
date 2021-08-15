import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListingBoxComponent } from './components/listing-box/listing-box.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"playlist", component:PlaylistPageComponent},
  {path:"**", component:HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
