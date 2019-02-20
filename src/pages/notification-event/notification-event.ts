import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Notification } from '../../interfaces/events';

@IonicPage()
@Component({
  selector: 'page-notification-event',
  templateUrl: 'notification-event.html',
})
export class NotificationEventPage {

  event: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationEventPage');
    // Pull the event we received from the home page    
    this.event = this.navParams.get("event");
  }

}
