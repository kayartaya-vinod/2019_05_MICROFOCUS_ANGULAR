import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contacts = this.service.getContacts(); // not yet subscribed
  }

}
