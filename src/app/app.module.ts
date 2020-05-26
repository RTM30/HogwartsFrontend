import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsTableComponent } from './components/students-table/students-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    StudentsTableComponent
  ]
})
export class AppModule { }
