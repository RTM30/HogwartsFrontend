import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin-state',
  templateUrl: './loggin-state.component.html',
  styleUrls: ['./loggin-state.component.css']
})
export class LogginStateComponent implements OnInit {

  loggedIn: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
