import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// for these to work, we have to install 'rxjs-compat'
import 'rxjs/add/operator/do'; // helps us peek throgh the data flowing via the observable
import 'rxjs/add/operator/map'; // helps us to convert data from one type to another

const baseUrl = 'http://localhost:3000/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getOneContact(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id)
      //.do(resp => console.log('logged at do function', resp))
      .map(resp => resp as Contact);
  }

  getContacts(pageNum: number = 1, pageSize: number = 10): Observable<Array<Contact>> {
    let options = {
      params: {
        _page: ''+pageNum, // expects parameters to be of type string
        _limit: ''+pageSize
      }
    };
    return this.http.get(baseUrl, options).map(resp => resp as Array<Contact>);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl+id);
  }
}
