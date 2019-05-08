import { Pipe, PipeTransform } from '@angular/core';

// pure pipes will not triggered even if the parameters (like contacts, token) gets mutated. "token" is a string, and strings are immutable, so everytime the "token" is changed, it is only because it is a new string. "contacts" on the other hand is an array and can be mutated (by push/pop/shift/unshift/splice etc operations). And when that happens, impure pipes gets triggered.
@Pipe({
  name: 'filter', 
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<any>, token: string = '', field: string = ''): any {
    if (!data) return [];
    if (!token) return data;

    if (field) {
      let re = new RegExp(token, 'i');
      return data.filter(c => re.test(c[field]));
    }
    return data.filter(c => this.matches(c, token));
  }

  private matches(obj, token) {
    let re = new RegExp(token, 'i');
    for (let key in obj) {
      if (re.test(obj[key])) return true;
    }
    return false;
  }

}
