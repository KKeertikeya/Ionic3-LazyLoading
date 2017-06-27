import { Component, OnInit } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import { DataInterface } from '../../data/messageData.interface';
import { AllFiltersInterface } from '../../data/all-filters.interface';
import allMessages from '../../data/messageData';
import appliedFilters from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})


export class InboxPage implements OnInit {

  messages: DataInterface[];
  filters: AllFiltersInterface;
  filteredPlatform = '';

  constructor(public navCtrl: NavController) {

  }

  ngOnInit () {
    this.messages = allMessages;
    this.filters = appliedFilters;
  }

  goToFilters() {
    this.navCtrl.push('InboxFiltersPage');
  }
}
