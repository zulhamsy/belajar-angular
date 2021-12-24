import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
      this.buttonText = 'Server: Power On';
      this.buttonDisabled = false;
    }, 2000);
  }

  onServerOn() {
    this.serverStatus = 'Online';
  }

  onInputField(event: Event) {
    this.displayText = (<HTMLInputElement>event.target).value;
  }

  resetNama() {
    this.nama = '';
  }

  title = 'Root App';
  buttonText = 'Server: Power Off';
  buttonDisabled = true;
  serverStatus = 'Offline';
  displayText = 'Coba ganti';
  nama = '';
}
