import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-angular1-app',
  templateUrl: './angular1-app.component.html',
  styleUrls: ['./angular1-app.component.css']
})
export class Angular1AppComponent implements OnInit {

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
    this.upgrade.bootstrap(document.getElementById('ng1phonebook'), ['phonebook']);
  }

}
