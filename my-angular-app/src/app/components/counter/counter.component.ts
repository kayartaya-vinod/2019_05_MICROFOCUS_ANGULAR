import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
