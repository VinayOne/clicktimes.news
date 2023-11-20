import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ],
})
export class AboutModule { }