import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';



@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PrivacyPolicyRoutingModule
  ],
  exports: [
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule { }
