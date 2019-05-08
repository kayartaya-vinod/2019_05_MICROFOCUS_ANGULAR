import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { LoadedRouterConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  pageNum: number = 1;
  // contacts: Observable<Contact[]>;
  contacts: Contact[] = [];

  constructor(private service: ContactsService) { }

  ngOnInit() {
    // this.contacts = this.service.getContacts(); // not yet subscribed
    this.loadData();
  }

  private loadData() {
    this.service.getContacts(this.pageNum++)
      .subscribe(data => this.contacts.push(...data))
  }

  // nextPage() {
  //   this.pageNum++;
  //   this.contacts = this.service.getContacts(this.pageNum);
  // }

  // prevPage() {
  //   this.pageNum--;
  //   this.contacts = this.service.getContacts(this.pageNum);
  // }

}
