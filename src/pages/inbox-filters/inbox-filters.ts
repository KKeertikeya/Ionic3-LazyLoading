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
  showMore: boolean = false;

  // numberOfSelectedProfiles: number;                       // Keeps track of the number of profiles that are selected for toggling All Profiles
  // numberOfSelectedTypes: number;                          // Keeps track of the number of profiles that are selected for toggling All Types
  numberOfSelectedTags: number;                           // Keeps track of the number of profiles that are selected for toggling All Tags
  
  filterData: any;                                        // Stores the data for filters
  
  profilesLength: number;                                 // Used for array declaration in the next line
  profiles: any[] = new Array(this.profilesLength);       // This array keeps all the profiles data
  typesLength: number;                                    // Used for array declaration in the next line
  types: any[] = new Array(this.typesLength);             // This array keeps all the types data
  tagsLength: number;                                     // Used for array declaration in the next line
  tags: any[] = new Array(this.tagsLength);               // This array keeps all the tags data 
  
  // resetProfiles: boolean;                                 // Used for toggling All profiles
  // resetTypes: boolean;                                    // Used for toggling All types
  disableRemoveAllTags: boolean;                          // Used for toggling All tags



  // Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log("----------------Constructor-----------------");

    // this.numberOfSelectedProfiles = 0;
    // this.numberOfSelectedTypes = 0;
    this.numberOfSelectedTags = 0;

    // this.resetProfiles = true;
    
    // this.resetTypes = true;
    
    // this.removeAllTags = true;

    if (this.numberOfSelectedTags === 0) {
      this.disableRemoveAllTags = true;
    } else {
      this.disableRemoveAllTags = false;
    }

    this.filterData = filterData;

    // added this instead of resetProfiles and resetTypes above
    // this.resetProfiles = filterData.resetProfiles;
    // this.resetTypes = filterData.resetTypes;

    this.profilesLength = filterData.profiles.length;
    this.typesLength = filterData.types.length;
    this.tagsLength = filterData.tags.length;
    this.profiles = filterData.profiles
    this.types = filterData.types;
    this.tags = filterData.tags;
  }



  // OnInit
  ngOnInit() {
  }
   
  showMoreProfiles() {
    this.showMore = !this.showMore;
  }



  /* ================Profiles================ */
  /*
    This method deselects the individual profiles toggles
    and sets the numberOfSelectedProfiles to 0
  */
  selectAllProfiles() {
    filterData.resetProfiles = !filterData.resetProfiles;

    if (filterData.resetProfiles) {
      // console.log("Inside selectAllProfiles()");

      filterData.numberOfSelectedProfiles = 0;

      var i: number = 0;
      for (i = 0; i < this.profiles.length; i++) {
        // if (this.profiles[i].selected)
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
    if (filterData.resetProfiles) {
      filterData.resetProfiles = false;
    }

    // If a profile is selected, increment numberOfSelectedProfiles
    if (this.profiles[i].selected) {
      filterData.resetProfiles = false;
      filterData.numberOfSelectedProfiles++;
    }
    // If a profile is deselected, increment numberOfSelectedProfiles
    else {
      filterData.numberOfSelectedProfiles--;

      if (filterData.numberOfSelectedProfiles === 0) {
        filterData.resetProfiles = true;
      }
    }
  }





  /* ================Types================ */
  /*
    This method deselects the individual Types toggles
    and sets the numberOfSelectedTypes to 0
  */
  selectAllTypes() {
    filterData.resetTypes = !filterData.resetTypes;

    if (filterData.resetTypes) {
      // console.log("Inside selectAllProfiles()");

      filterData.numberOfSelectedTypes = 0;

      var i: number = 0;
      for (i = 0; i < this.types.length; i++) {
        // if (this.profiles[i].selected)
          this.types[i].selected = false;
      }
    }

    /* if (filterData.resetTypes) {
      // console.log("Inside selectAllTypes()");

      filterData.numberOfSelectedTypes = 0;

      var j: number = 0;
      for (j = 0; j < this.typesLength; j++) {
        // console.log(j);
        this.types[j].selected = true;
      }
    } */
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


    if (filterData.resetTypes) {
      filterData.resetTypes = false;
    }

    // If a profile is selected, increment numberOfSelectedProfiles
    if (this.types[i].selected) {
      filterData.resetTypes = false;
      filterData.numberOfSelectedTypes++;
    }
    // If a profile is deselected, increment numberOfSelectedProfiles
    else {
      filterData.numberOfSelectedTypes--;

      if (filterData.numberOfSelectedTypes === 0) {
        filterData.resetTypes = true;
      }
    }



    /* if (filterData.resetTypes) {
      filterData.resetTypes = false;
    }

    // If a type is selected, increment numberOfSelectedTypes
    if (this.types[i].selected) {

      filterData.numberOfSelectedTypes++;
    }
    // If a type is deselected, increment numberOfSelectedTypes
    else {
      filterData.numberOfSelectedTypes--;

      if (filterData.numberOfSelectedTypes === 0) {
        filterData.resetTypes = false;
      }
    } */
  }






  /* ================Tags================ */
  /*
    This method deselects the individual tags toggles
    and sets the numberOfSelectedTags to 0
  */
  removeAllTagsMethod() {

    this.numberOfSelectedTags = 0;
    var i: number = 0;
    for (i = 0; i < this.tags.length; i++) {
      this.tags[i].selected = false;
    }

    this.disableRemoveAllTags = true;
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



    if (filterData.resetTags) {
      filterData.resetTags = false;
    }

    // If a profile is selected, increment numberOfSelectedProfiles
    if (this.tags[i].selected) {
      filterData.resetTags = false;
      filterData.numberOfSelectedTags++;
    }
    // If a profile is deselected, increment numberOfSelectedProfiles
    else {
      filterData.numberOfSelectedTags--;

      if (filterData.numberOfSelectedTags === 0) {
        filterData.resetTags = true;
      }
    }



    /* 
    if (filterData.numberOfSelectedProfiles === 0) {
      this.disableRemoveAllTags = true;
    }

    // If an individual tag is selected
    if (this.tags[i].selected) {
      this.numberOfSelectedTags++;
      this.disableRemoveAllTags = false;
    }
    // If a type is deselected, increment numberOfSelectedTypes
    else {
      this.numberOfSelectedTags--;

      if (this.numberOfSelectedTags === 0) {
        this.disableRemoveAllTags = true;
      }
    } */
  }


  resetTags() {
    filterData.resetTags = !filterData.resetTags;

    if (filterData.resetTypes) {
      // console.log("Inside selectAllProfiles()");

      filterData.numberOfSelectedTags = 0;

      var i: number = 0;
      for (i = 0; i < this.tags.length; i++) {
        // if (this.profiles[i].selected)
          this.tags[i].selected = false;
      }
    }
  }




  goToInboxTagsPage() {
    this.navCtrl.push("InboxTagsPage");
  }





  filterSaveButton() {
    console.log("Save button clicked!");
  }

  filtersCancelButton() {
    this.navCtrl.pop();
  }
}
