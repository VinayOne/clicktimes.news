import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { GoogleTrendsComponent } from '../general/google-trends/google-trends.component';
import { SearchResultComponent } from '../general/search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './date/date.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleTrendsComponent,
    SearchResultComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    GoogleTrendsComponent,
    SearchResultComponent,
    FormsModule,
    ReactiveFormsModule,
    DateComponent
  ]
})
export class SharedModule { }
