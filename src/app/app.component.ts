import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'August20';
  number1 = 50;
  number2 = 25;

  first_name = 'Suraj';
  last_name = 'Nikhade';

  interpolationCall() {
    return 'Your are Inside a Function';
  }
}
