import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headingTwo = 'I love interpolation.';
  imageUrl = '../../assets/favicon.ico';

  changeValue() {
    this.headingTwo = 'This values has been changes';
  }

  returnString() {
    return 'Is it Work?';
  }
}
