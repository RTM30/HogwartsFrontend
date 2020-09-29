import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app/models/student';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // Captures the form's values
  reactiveForm = new FormGroup({
    studentid: new FormControl(''),
    password: new FormControl(''),
  });

  // Gets student info at login
  loginResults: student[];

  constructor(
    public studentService: StudentService,
    private router: Router,
    public snackbar: MatSnackBar,
    public dialog: MatDialog,
    public loginState: LoginStateService) { }

  ngOnInit(): void {

}

// login
login(){
  this.studentService.login(this.reactiveForm.value)
  .subscribe(results => {
    this.loginResults = results;
    console.log('The user logged in is ', this.loginResults);


    if (this.loginResults != null) {

    // Set login state to true
    this.loginState.setLoginState();

    // Load new page after login
    this.router.navigate(['./home']);

    // snackbar notification
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackbar.open('Login successful', '', config);

    this.dialog.closeAll();
   }
   else {
     console.log('login failed');
     const config = new MatSnackBarConfig();
     config.duration = 3000;
     this.snackbar.open('Login failed', '', config);
   }
  }); // End of subscribe
  }

   // Close modal
   close(){
     this.dialog.closeAll();
   }
}
