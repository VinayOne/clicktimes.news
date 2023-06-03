import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { GoogleTrendsComponent } from '../general/google-trends/google-trends.component';
import { SearchResultComponent } from '../general/search-result/search-result.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleTrendsComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    GoogleTrendsComponent,
    SearchResultComponent
  ]
})
export class SharedModule { }
