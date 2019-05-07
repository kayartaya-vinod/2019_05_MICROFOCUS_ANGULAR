import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // let id = this.activatedRoute.snapshot.params['id'];
    // this.service.getOneContact(id)
    //   .subscribe(data => this.contact = data);

    this.activatedRoute.params.subscribe(params =>
      this.service.getOneContact(params['id'])
        .subscribe(data => this.contact = data));
  }

}
