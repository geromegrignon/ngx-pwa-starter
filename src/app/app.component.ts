import { Component } from '@angular/core';
import {getContacts} from "./core/utils/contact-picker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: any = null;
  error: any = null;

  async retrieveContacts(): Promise<void> {
    try {
      this.contacts = await getContacts();
    } catch (e) {
      this.error = e;
    }
  }
}
