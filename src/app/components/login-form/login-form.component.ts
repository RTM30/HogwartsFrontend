import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app/models/student';
import { Router } from '@angular/router';

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



  constructor(public studentService: StudentService, private router: Router) { }


  ngOnInit(): void {

}

// login
login(){
  this.studentService.login(this.reactiveForm.value)
  .subscribe(results => {
    this.loginResults = results;
    console.log('The user logged in is ', this.loginResults);

  // Load new page after login
    if (this.loginResults != null) {
    this.router.navigate(['./home']);
   }
   else {
     console.log('login failed');
   }
  }); // End of subscribe
  }
}
