import { Pipe, PipeTransform } from '@angular/core';


// <p>Age: {{ contact.dob | age  }} </p>
// <p>Age: {{ contact.dob | age : 1 }} </p>
// <p>Age: {{ contact.dob | age : 2 }} </p>
// <p>Age: {{ contact.dob | age : 3 }} </p>

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag: number = 1): any {
    if (!dob) return '';

    let diff = Date.now() - new Date(dob).getTime(); // diff in Millis
    let dt = new Date(diff); // this date will be offset by 1970
    let y = dt.getFullYear() - 1970;
    let m = dt.getMonth();
    let d = dt.getDate();

    switch (flag) {
      case 3: return `${y} years, ${m} months and ${d} days.`;
      case 2: return `${y} years and ${m} months.`;
      default:
        return `${y} years.`;
    }
  }

}
