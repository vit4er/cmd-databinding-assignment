import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numIncremented: number;
  num: number;
  @Output() numberGenerated = new EventEmitter<{num: number}>();
  @Output() gameStopping = new EventEmitter<{num: number}>();
  constructor() { }

  ngOnInit() {
    this.num = 0;
  }

  onStartClick() {
    this.numIncremented = setInterval(() => {
      this.numberGenerated.emit({num: ++this.num});
    }, 1000);
  }
  onStopClick() {
    this.num = 0;
    this.numberGenerated.emit({num: 0});
    clearInterval(this.numIncremented);
  }
}
