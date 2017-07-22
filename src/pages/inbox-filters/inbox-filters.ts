import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import filterData from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox-filters',
  templateUrl: 'inbox-filters.html',
  styles: [`
    .profile-show {display: none}
  `],
})
export class InboxFiltersPage implements OnInit {

  // Data declaration
  numberOfSelectedProfiles: number;                       // Keeps track of the number of profiles that are selected for toggling All Profiles
  numberOfSelectedTypes: number;                          // Keeps track of the number of profiles that are selected for toggling All Types
  numberOfSelectedTags: number;                           // Keeps track of the number of profiles that are selected for toggling All Tags
  
  filterData: any;                                        // Stores the data for filters
  
  profilesLength: number;                                 // Used for array declaration in the next line
  profiles: any[] = new Array(this.profilesLength);       // This array keeps all the profiles data
  typesLength: number;                                    // Used for array declaration in the next line
  types: any[] = new Array(this.typesLength);             // This array keeps all the types data
  tagsLength: number;                                     // Used for array declaration in the next line
  tags: any[] = new Array(this.tagsLength);               // This array keeps all the tags data 
  
  allProfiles: boolean;                                     // Used for toggling All profiles
  allTypes: boolean;                                        // Used for toggling All types
  allTags: boolean;                                         // Used for toggling All tags



  // Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log("----------------Constructor-----------------");

    this.numberOfSelectedProfiles = 0;
    this.numberOfSelectedTypes = 0;
    this.numberOfSelectedTags = 0;

    this.allProfiles = true;
    this.allTypes = true;
    this.allTags = true;

    this.filterData = filterData;
    this.profilesLength = filterData.profiles.length;
    this.typesLength = filterData.types.length;
    this.tagsLength = filterData.tags.length;
    this.profiles = filterData.profiles
    this.types = filterData.types;
    this.tags = filterData.tags;
  }



  // OnInit
   ngOnInit() {
    
    console.log("----------------OnInit-----------------");
    
  }



  /* ================Profiles================ */
  /*
    This method deselects the individual profiles toggles
    and sets the numberOfSelectedProfiles to 0
  */
  selectAllProfiles() {
    if (this.allProfiles) {
      // console.log("Inside selectAllProfiles()");

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





  /* ================Types================ */
  /*
    This method deselects the individual Types toggles
    and sets the numberOfSelectedTypes to 0
  */
  selectAllTypes() {
    if (this.allTypes) {
      // console.log("Inside selectAllTypes()");

      this.numberOfSelectedTypes = 0;

      var j: number = 0;
      for (j = 0; j < this.typesLength; j++) {
        // console.log(j);
        this.types[j].selected = false;
      }
    }
  }


  /*
    This method deselects the All types toggle
    if it was selected. Else it will increment/decrement numberOfSelectedTypes
    when an individual type is selected/deselected
  */
  selectIndividualTypes(i: number) {

    /*
      Check if all types toggle is checked 
      If yes, then deselect it.
      Else continue.
    */
    if (this.allTypes) {
      this.allTypes = false;
    }

    // If a type is selected, increment numberOfSelectedTypes
    if (this.types[i].selected) {

      this.numberOfSelectedTypes++;
    }
    // If a type is deselected, increment numberOfSelectedTypes
    else {
      this.numberOfSelectedTypes--;

      if (this.numberOfSelectedTypes === 0) {
        this.allTypes = true;
      }
    }
  }






  /* ================Tags================ */
  /*
    This method deselects the individual tags toggles
    and sets the numberOfSelectedTags to 0
  */
  selectAllTags() {
    if (this.allTags) {

      this.numberOfSelectedTags = 0;

      var i: number = 0;
      for (i = 0; i < this.tags.length; i++) {
        this.tags[i].selected = false;
      }
    }
  }


  /*
    This method deselects the All Tags toggle
    if it was selected. Else it will increment/decrement numberOfSelectedTags
    when an individual profile is selected/deselected
  */
  selectIndividualTags(i: number) {

    /*
      Check if all tags toggle is checked 
      If yes, then deselect it.
      Else continue.
    */
    if (this.allTags) {
      this.allTags = false;
    }

    // If an individual tag is selected
    if (this.tags[i].selected) {
      this.numberOfSelectedTags++;
    }
    // If a type is deselected, increment numberOfSelectedTypes
    else {
      this.numberOfSelectedTags--;

      if (this.numberOfSelectedTags === 0) {
        this.allTags = true;
      }
    }
  }
}
