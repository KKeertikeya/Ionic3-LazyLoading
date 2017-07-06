import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import filterData from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox-filters',
  templateUrl: 'inbox-filters.html',
})
export class InboxFiltersPage implements OnInit {

  // Data declaration
  numberOfSelectedProfiles: number;                       // Keeps track of the number of profiles that are selected for toggling All Profiles
  filterData: any;                                        // Stores the data for filters
  profilesLength: number;                                 // Used for array declaration in the next line
  profiles: any[] = new Array(this.profilesLength);       // This array keeps all the profiles data 
  allProfiles = true;                                     // Used for toggling All profiles

  // Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numberOfSelectedProfiles = 0;
  }

  // OnInit
   ngOnInit() {
    this.filterData = filterData;
    this.profilesLength = filterData.profiles.length;
    this.profiles = filterData.profiles
    // console.log("----------------OnInit-----------------");
  }


  /*
    This method deselects the individual profiles toggles
    and sets the numberOfSelectedProfiles to 0
  */
  selectAllProfiles() {
    if (this.allProfiles) {

      this.numberOfSelectedProfiles = 0;

      var i: number = 0;
      for (i = 0; i < 6; i++) {
        this.profiles[i].selected = false;
      }
    }
  }


  /*
    This method deselects the All Profiles toggle
    if it was selected. Else it will increment/decrement numberOfSelectedProfiles
    when an individual profile is selected/deselected
  */
  selectIndividualProfiles(i: number) {

    /*
      Check if all prfiles toggle is checked 
      If yes, then deselect it.
      Else continue.
    */
    if (this.allProfiles) {
      this.allProfiles = false;
    }

    // If a profile is selected, increment numberOfSelectedProfiles
    if (this.profiles[i].selected) {
      this.numberOfSelectedProfiles++;
    }
    // If a profile is deselected, increment numberOfSelectedProfiles
    else {
      this.numberOfSelectedProfiles--;

      if (this.numberOfSelectedProfiles === 0) {
        this.allProfiles = true;
      }
    }
  }
}
