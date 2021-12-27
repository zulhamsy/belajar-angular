import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-assignment-one]',
  templateUrl: './assignment-one.component.html',
  styleUrls: ['./assignment-one.component.css'],
})
export class AssignmentOneComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.buttonText = 'Server: Power On';
      this.buttonDisabled = false;
    }, 2000);
  }

  buttonText = 'Server: Power Off';
  buttonDisabled = true;
  serverStatus = 'Offline';
  displayText = 'Coba ganti';
  nama = '';

  onServerOn() {
    this.serverStatus = 'Online';
  }

  onInputField(event: Event) {
    this.displayText = (<HTMLInputElement>event.target).value;
  }

  resetNama() {
    this.nama = '';
  }
  ngOnInit(): void {}
}
