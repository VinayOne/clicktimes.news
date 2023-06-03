import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BusinessRoutingModule
  ],
  exports: [BusinessComponent]
})
export class BusinessModule { }
