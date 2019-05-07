import { Pipe, PipeTransform } from '@angular/core';


// <p>Name: {{ contact | fullname }}</p>

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: any): string {
    if (!contact) return '';
    let title = 'Ms.';
    if (contact.gender === 'Male') {
      title = 'Mr.';
    }
    return `${title} ${contact.firstname} ${contact.lastname}`;
  }

}
