import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { TechnologyComponent } from './technology.component';
import { TechnologyRoutingModule } from './technology-routing.module';



@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TechnologyRoutingModule
  ],
  exports: [
    TechnologyComponent
  ]
})
export class TechnologyModule { }
