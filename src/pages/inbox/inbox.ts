import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { InboxFiltersPage } from '../inbox-filters/inbox-filters';


@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})


export class InboxPage {

  messages = [
    {
      sender: 'Dumbledore',
      senderType: 'HM',
      messageDate: new Date(1880, 1-1, 1),
      image: 'https://i.ytimg.com/vi/R6LkIcMB3oY/maxresdefault.jpg',
      text: 'Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?',
      color: '#3b5998',
      platform: 'facebook'
    },
    {
      sender: 'Voldy',
      senderType: 'DL',
      messageDate: new Date(1960, 12-1, 31),
      image: 'https://s1.favim.com/orig/21/boss-dumbledore-funny-harry-potter-like-a-boss-Favim.com-206937.jpg',
      text: 'Surely you didn’t think I was going to keep my filthy Muggle father’s name? No. I fashioned myself a new name, a name I knew wizards everywhere would one day fear to speak, when I became the greatest sorcerer in the world!',
      color: '#cd486b',
      platform: 'instagram'
    },
    {
      sender: 'Snape',
      senderType: 'Prof',
      messageDate: new Date(1991, 10-1, 1),
      image: 'https://lovelace-media.imgix.net/uploads/140/61fc4b50-99a4-0132-44da-0ebc4eccb42f.jpg?',
      text: 'Yes, it is easy to see that nearly six years of magical education have not been wasted on you, Potter. Ghosts are transparent.',
      color: '#d34836',
      platform: 'google plus'
    },
    {
      sender: 'Hermione Granger',
      senderType: 'Friend',
      messageDate: new Date(1991, 9-1, 1),
      image: 'https://thebrotherhoodofevilgeeks.files.wordpress.com/2014/03/hermione-granger-hermione-granger-20053436-936-1197.jpg',
      text: 'Oh, you’re so naive sometimes, Harry, you really think Umbridge will wait for proof?',
      color: '#1dcaff',
      platform: 'twitter'
    },
    {
      sender: 'Ron Weasley',
      senderType: 'Friend',
      messageDate: new Date(),
      image: 'https://pbs.twimg.com/profile_images/2553924396/image.jpg',
      text: 'I knew Ginny was lying about that tattoo.',
      color: '#1dcaff',
      platform: 'twitter'
    }
  ];

  filteredPlatform = '';

  constructor(public navCtrl: NavController) {

  }

  goToFilters() {
    this.navCtrl.push(InboxFiltersPage);
  }
}