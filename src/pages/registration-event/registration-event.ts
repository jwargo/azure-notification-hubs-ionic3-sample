import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Registration } from '../../interfaces/events';

@IonicPage()
@Component({
  selector: 'page-registration-event',
  templateUrl: 'registration-event.html',
})
export class RegistrationEventPage {

  // event: Registration;
  event: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationEventPage');
    // Pull the event we received from the home page    
    this.event = this.navParams.get("event");    
  }

}
