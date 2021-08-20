import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { RecursosComponent } from './main/pages/recursos/recursos.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'recursos',
    component: RecursosComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
