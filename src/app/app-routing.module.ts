import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallePodcastComponent } from './components/detalle-podcast/detalle-podcast.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'detalle/:id', component: DetallePodcastComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
