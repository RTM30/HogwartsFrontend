import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

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
  })

  constructor() { }


  ngOnInit(): void {
    
}

// login
login(){
  console.log(this.reactiveForm.value)
}
}
