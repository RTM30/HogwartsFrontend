import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService, Student } from 'src/app/services/student.service';
import { student } from 'src/app/models/student';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    dobMonth: new FormControl(''),
    dobDay: new FormControl(''),
    dobYear: new FormControl(''),
    house: new FormControl(''),
  });

  student: Student[] = null;
  studentCreated: boolean;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.createAccountForm.value);
    this.studentService.createStudent(this.createAccountForm.value)
    .subscribe(data => {
      console.log(data);
      this.student = data;
    });
  }
}
