import { Component } from '@angular/core';
import {getContacts} from "./core/utils/contact-picker";
import {share} from "./core/utils/share";

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

  async shareData(): Promise<void> {
    try {
      await share({
        title: 'MDN',
        text: 'Check out MDN\'s website!',
        url: 'https://developer.mozilla.org/en-US/'
      });
    } catch (e) {
      this.error = e;
    }
  }


}
