import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module'

import { RecursosComponent } from './pages/recursos/recursos.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    RecursosComponent,
    HomeComponent,
  ],
  exports: [
    RecursosComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})

export class MainModule { }
