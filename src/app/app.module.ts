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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // formsExperiment
import { MaterialModule } from './material/material.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent,
    NavBarComponent,
    IndexComponent,
    LoginFormComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent,
      },
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
    ]),
    BrowserAnimationsModule
  ],
  entryComponents: [LoginFormComponent],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
