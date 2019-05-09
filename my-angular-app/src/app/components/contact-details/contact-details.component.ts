import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as swal from 'bootstrap-sweetalert';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    // let id = this.activatedRoute.snapshot.params['id'];
    // this.service.getOneContact(id)
    //   .subscribe(data => this.contact = data);

    this.activatedRoute.params.subscribe(params =>
      this.service.getOneContact(params['id'])
        .subscribe(data => this.contact = data));
  }

  confirmAndDelete() {

    swal({
      title: '<span class="text-danger">Confirm deletion</span>',
      html: true,
      text: 'The record will be deleted permanently',
      type: 'warning',
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-secondary'
    }, (confirmed) => {
      if (confirmed) {
        this.service.deleteContact(this.contact.id)
          .subscribe(() => {
            this.router.navigate(['/contact-list']);
          });
      }
    });
  }

  storeContactInSession() {
    sessionStorage.setItem('contact', JSON.stringify(this.contact));
    // this.service['contact_for_edit'] = this.contact;
  }
}
