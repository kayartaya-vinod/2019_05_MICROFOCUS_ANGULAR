import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  contact: Contact;

  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
  }

  saveContact() {
    
  }

}
