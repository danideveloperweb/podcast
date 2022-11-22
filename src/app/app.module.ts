import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { DetallePodcastComponent } from './components/detalle-podcast/detalle-podcast.component';
import { DetallecapituloPodcastComponent } from './components/detallecapitulo-podcast/detallecapitulo-podcast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallePodcastComponent,
    DetallecapituloPodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
