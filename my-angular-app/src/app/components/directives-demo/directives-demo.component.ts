import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  author = 'Vinod';
  persons: Array<any>;
  gender: string;

  defaultStyles = {
    'border-left-width.px': 5,
    'border-left-style': 'solid',
    'border-left-color': 'red',
    'padding.px': 10,
    listStyle: 'none'
  }

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

  getClassName(p) {
    return (p.age<18) ? 'text-danger': 'text-success';
  }

}
