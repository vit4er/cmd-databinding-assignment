import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';
  num: number;
  onNumberGenerated(data: {num: number}) {
    this.num = data.num;
  }
}
