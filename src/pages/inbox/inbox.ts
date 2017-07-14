import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import { MessageDataInterface } from '../../data/messageData.interface';
import { AllFiltersInterface } from '../../data/all-filters.interface';
import allMessages from '../../data/messageData';
import appliedFilters from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})


export class InboxPage {

  messages: MessageDataInterface[];
  filters: AllFiltersInterface;
  filteredPlatform = '';

  constructor(public navCtrl: NavController) {
     
    this.messages = allMessages;
    this.filters = appliedFilters;
  }

  goToInboxSettings() {
    
    this.navCtrl.push('InboxSettingsPage');
  }

  goToInboxFilters() {
    
    this.navCtrl.push('InboxFiltersPage');
  }
}
