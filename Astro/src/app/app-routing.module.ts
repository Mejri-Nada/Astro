import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { UniverseComponent } from './universe';


const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'universe',component: UniverseComponent},
  //otherwise redirect to home
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
