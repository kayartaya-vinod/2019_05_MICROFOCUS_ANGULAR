import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.service.getOneContact(1)
      .subscribe(data => this.contact = data);
  }

}
