import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .special-log {
      color: white;
    }
  `]
})
export class DetailsComponent implements OnInit {
  hideDetails: boolean = false;
  clickActions: any[] = [];


  constructor() {
    this.hideDetails = false;
   }

  ngOnInit(): void {
  }

  toggleShowDetails(): void {
    this.hideDetails = !this.hideDetails;
  }

  addActionToLog(): void {
    this.clickActions.push([this.clickActions.length + 1,  "Button clicked at: " + new Date()]);
  }

}
