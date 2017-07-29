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
  displaySearchBar = "none";

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
 
  filterItems(ev: any) {
    // this.setItems();
    // let val = ev.value;
    /* alert(val);
    if (val && val.trim() !== '') {
      this.messages = this.messages.filter(
        function(item) {
          return this.messages.toLowerCase().includes(val.toLowerCase());
        }
      );
    } */
  }

  
  showSearchBar() {
    this.displaySearchBar = "flex";
  }


}
