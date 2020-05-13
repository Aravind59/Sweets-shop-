import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SweetDetailsComponent } from './sweet-details/sweet-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'details', component: SweetDetailsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
