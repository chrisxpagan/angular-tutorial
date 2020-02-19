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
  clickActions: string[] = [];


  constructor() {
    this.hideDetails = false;
   }

  ngOnInit(): void {
  }

  toggleShowDetails(): void {
    this.hideDetails = !this.hideDetails;
  }

  addActionToLog(): void {
    this.clickActions.push("Button clicked at: " + new Date());
  }

}
