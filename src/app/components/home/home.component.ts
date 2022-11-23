import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PodcastService } from 'src/app/services/podcast.service';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  podcast: any[] = [];
  podcastBuscando:any[]=[];
  nombreBuscado:string = '';

  constructor(private podcastService: PodcastService, private router: Router) {}

  ngOnInit(): void {
    this.podcastService.obtenerPodcats().subscribe((response: any) => {
      console.log(response);
      this.podcast = response.feed.entry;
      this.podcastBuscando = response.feed.entry;

       localStorage.setItem('podcast', JSON.stringify(this.podcast));
       let potcast = this.podcastService.getItem('podcast');
    });
  }

  buscarXNombre():void{
    this.podcast = this.podcastBuscando.filter(busqueda => busqueda.title.label.toUpperCase().includes(this.nombreBuscado.toUpperCase()))
     || this.podcastBuscando.filter(busqueda => busqueda?.['im:artist'].label.toUpperCase().includes(this.nombreBuscado.toUpperCase()));
  }

}
