import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  persons: Array<any>;
  gender: string;
  constructor() { }

  ngOnInit() {
    this.gender = 'Male';

    this.persons = [
      { name: 'Ramesh', gender: 'Male', age: 50 },
      { name: 'Kishore', gender: 'Male', age: 12 },
      { name: 'Ramya', gender: 'Female', age: 22 },
      { name: 'Aadhya', gender: 'Female', age: 8 },
      { name: 'Anil', gender: 'Male', age: 24 },
    ];
  }

  toggleFilter() {
    this.gender = this.gender === 'Male' ? 'Female' : 'Male';
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }

}
