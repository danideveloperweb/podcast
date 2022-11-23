import { Component, OnInit } from '@angular/core';

import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  potcast:any[]=[];

  constructor(private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.podcastService.obtenerPodcats().subscribe((response:any)=> {
      console.log(response);
      this.potcast = response.feed.entry;
      localStorage.setItem("podcast", JSON.stringify(this.potcast));
      let potcast = this.podcastService.getItem("potcast")

    });
  }



}
