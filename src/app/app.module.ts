import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './alert/success-alert/success-alert.component';
import { WarningAlertComponent } from './alert/warning-alert/warning-alert.component';

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WarningAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
