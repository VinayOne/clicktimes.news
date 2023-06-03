import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { HealthRoutingModule } from './health-routing.module';



@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HealthRoutingModule
  ],
  exports: [
    HealthComponent
  ]
})
export class HealthModule { }
