import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isUsernameBlank() {
    return this.username !== undefined && this.username !== "";
  }

  resetUsername() {
    this.username = "";
  }

}
