import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // formsExperiment

@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent,
    NavBarComponent,
    IndexComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  //formsExperiment
    ReactiveFormsModule,  //formsExperiment
    RouterModule.forRoot([
      {
        path: 'studentTable',
        component: StudentsTableComponent,
      },
      {
        path: 'home',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginFormComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavBarComponent
  ]
})
export class AppModule { }
