import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  contact: any;

  constructor() { }

  ngOnInit() {
    this.contact = {
      gender: 'Female',
      firstname: 'Vimala',
      lastname: 'Rao',
      dob: '1980-03-05'
    }
  }

}
