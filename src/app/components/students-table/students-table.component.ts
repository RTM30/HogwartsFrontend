import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from 'src/app/services/student.service';
import { stringify } from 'querystring';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  studentsArray: string[];

  allStudents: Student[];
  studentFirstName1: string;
  studentLastName1: string;
  studentId1: string;
  studentHouse1: string;
  studentRegDate1: string;
  studentRegTime1: string;

  loginState: boolean;

  constructor(
    public loginStateService: LoginStateService,
    private studentService: StudentService) {

       this.loginState = this.loginStateService.loggedIn;


  }

  ngOnInit(): void {

    this.studentService.getStudents()
    .subscribe(data => {
      console.log(data);
      this.allStudents = data;
      console.log(this.loginStateService.loggedIn);
    });
  }
}
