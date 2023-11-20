import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { DisclaimerComponent } from './disclaimer.component';
import { DisclaimerRoutingModule } from './disclaimer-routing.module';



@NgModule({
  declarations: [
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DisclaimerRoutingModule
  ],
  exports: [
    DisclaimerComponent
  ]
})
export class DisclaimerModule { }
