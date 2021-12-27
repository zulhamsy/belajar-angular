import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-assignment-two]',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css'],
})
export class AssignmentTwoComponent implements OnInit {
  constructor() {}

  // Hide and Show
  isHidden = true;
  toggleHiddenText() {
    this.isHidden = !this.isHidden;
    this.log.push(new Date().toString());
  }

  // Button Log
  log: string[] = [];

  ngOnInit(): void {}
}
