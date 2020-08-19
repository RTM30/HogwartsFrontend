import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Student {

  constructor(
  public studentId: string,
  public firstName: string,
  public lastName: string,
  public house: string,
  public regDate: string,
  public regTime: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  constructor(
  private httpClient: HttpClient
  ) { }

  // Get all students
  getStudents() {
    return this.httpClient.get<Student[]>('http://localhost:8080/student/findall');
  }

  // Login
  login(studentId: any){
    console.log('logging in' + studentId);
    return this.httpClient.post<Student[]>('http://localhost:8080/student/login', studentId);
  }


}
