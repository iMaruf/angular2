import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  Character: string[];
  CharacterFirstName: string[] = ['Jhon', 'Arya', 'Cersei', 'Daenerys'];
  CharacterLastName: string[] = ['Snow', 'Stark', 'Lannister', 'Targaryen'];
  i = 0;
  stopSwitch: any;
  stopSwitchStatus = true;
  twoWayData = 'Tyrion';

  @Input() imageUrlChild: string;

  stopSeitchFirstAndLast() {
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus = true;
  }

  switchFirstAndLastName() {
    this.stopSwitch = setInterval(() => {
      if (this.i % 2 === 0) {
        this.Character = this.CharacterFirstName;
        console.log('If');
      } else {
        this.Character = this.CharacterLastName;
        console.log('Else');
      }
      this.i++;
    }, 300);
    this.stopSwitchStatus = false;
  }

  constructor() {
    this.Character = this.CharacterFirstName;
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
  }

}
