import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { SportsComponent } from './sports.component';
import { SportsRoutingModule } from './sports-routing.module';



@NgModule({
  declarations: [
    SportsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    SportsRoutingModule
  ],
  exports: [SportsComponent]
})
export class SportsModule { }
