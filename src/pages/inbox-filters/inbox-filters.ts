import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import filterData from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox-filters',
  templateUrl: 'inbox-filters.html',
})
export class InboxFiltersPage implements OnInit {

  filterData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit () {
    this.filterData = filterData;
    // console.log(filterData.types[0].platform);
  }
}
