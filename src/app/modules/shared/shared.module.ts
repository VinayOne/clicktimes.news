import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeService } from './home.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../general/home/home.component';
import { GoogleTrendsComponent } from '../general/google-trends/google-trends.component';
import { SearchResultComponent } from '../general/search-result/search-result.component';
import { DateComponent } from './date/date.component';
import { LocalstorageService } from './localstrorage.service';
import { Meta, Title } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GoogleTrendsComponent,
    SearchResultComponent,
    DateComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GoogleTrendsComponent,
    SearchResultComponent,
    DateComponent
  ],
  providers: [
    HomeService,
    LocalstorageService,
    Title,
    Meta
  ]
})
export class SharedModule { }
