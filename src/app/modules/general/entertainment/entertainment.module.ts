import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EntertainmentRoutingModule } from './entertainment/entertainment-routing.module';



@NgModule({
  declarations: [
    EntertainmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EntertainmentRoutingModule
  ],
  exports: [
    EntertainmentComponent
  ]
})
export class EntertainmentModule { }
