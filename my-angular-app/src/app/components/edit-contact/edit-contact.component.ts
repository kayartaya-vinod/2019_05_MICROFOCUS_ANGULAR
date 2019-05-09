import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup; // corresponds to a <form [formGroup]="contactForm"> tag

  constructor(private service: ContactsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      picture: new FormControl(),
      country: new FormControl()
    });

    let data = sessionStorage.getItem('contact');
    // let data = this.service['contact_for_edit'];
    if (data) {
      sessionStorage.removeItem('contact');
      // this.contact = data;
      this.contactForm.setValue(JSON.parse(data));
    }
    else {
      const id = this.activatedRoute.snapshot.params['id'];
      this.service.getOneContact(id).subscribe(data => {
        this.contactForm.setValue(data);
      });
    }
  }

  saveChanges() {
    this.service.updateContact(this.contactForm.value)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id]);
      });
  }

}
