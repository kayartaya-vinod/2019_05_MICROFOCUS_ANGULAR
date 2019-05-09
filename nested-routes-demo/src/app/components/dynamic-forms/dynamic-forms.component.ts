import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  empForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      name: [''],
      email: [''],
      address: this.fb.group({
        city: ['Bangalore'],
        country: ['India']
      }),
      skills: this.fb.array([
        this.createSkill(),
      ])
    });

    this.empForm.setValue({
      name: 'vinod',
      email: 'vinod@vinod.co',
      address: {
        city: 'bangalore',
        country: 'india'
      },
      skills: [
        {
          name: 'java',
          level: 5
        }
      ]
    });
  }

  createSkill() {
    return this.fb.group({
      name: [''],
      level: [5]
    });
  }

  addSkill() {
    debugger;
    let skills = <FormArray>this.empForm.get('skills');
    skills.push(this.createSkill());
  }

}
