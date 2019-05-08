import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { LoadedRouterConfig } from '@angular/router/src/config';

import * as $ from 'jquery';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  pageNum: number = 1;
  // contacts: Observable<Contact[]>;
  contacts: Contact[] = [];

  constructor(private service: ContactsService) { }

  ngOnInit() {
    // this.contacts = this.service.getContacts(); // not yet subscribed
    this.loadData();
    let w = $(window);    // browser window
    let d = $(document);  // document page
    // register a listener function to the 'scroll' event of the browser
    w.on('scroll', () => {
      if (w.scrollTop() + w.height() + 1 >= d.height()) {
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    // unregister the 'scroll' event from the browser window
    let w = $(window);
    w.off('scroll');
  }

  private loadData(): void {
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
