import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public dialog: MatDialog) { }

  open(){
    this.dialog.open(LoginFormComponent);
  }

}
