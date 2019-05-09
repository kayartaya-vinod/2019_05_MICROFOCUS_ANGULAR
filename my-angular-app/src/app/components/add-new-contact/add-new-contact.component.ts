import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactsService,
    private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  resetForm() {
    this.contact = new Contact();
  }


  test() {
    debugger;
  }

  saveContact() {
    this.service.addNewContact(this.contact)
      .subscribe(c => {
        this.router.navigate(['/contact-details', c.id]);
      });
  }

}
