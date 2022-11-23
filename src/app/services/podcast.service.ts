import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  podcast: string = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";


  constructor(private httpClient: HttpClient) {
   }

  obtenerPodcats(){
    let url = this.podcast;
    return this.httpClient.get(url);
  }
  detallePodcast(nombre:string){
    let url = `${this.podcast}/${nombre}`;
    return this.httpClient.get(url);
  }

  getItem(podcast:string){
    const item = localStorage.getItem(podcast);
    return (item) ? JSON.parse(item):null;
  }

  setItem(podcast:string, value:any): void {
    localStorage.setItem(podcast, JSON.stringify(value));
  }

  removeItem(podcast:string):void {
    localStorage.removeItem(podcast);
  }

  clear(){
    localStorage.clear();
  }
}
