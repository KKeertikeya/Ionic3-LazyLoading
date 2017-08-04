import { Component, Input } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'composer-summary',
  templateUrl: 'composer-summary.html'
})
export class ComposerSummaryComponent {

  @Input() platform: string;
  @Input() senderName: string;
  @Input() senderType: string;
  @Input() tags: any;

  tagsLength: number;

  testCheckboxOpen;
  testCheckboxResult;

  newLabel: string = '';
  newValue: string = '';

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {
    // this.tagsLength = this.tags.length;
    // console.log("Getting tagsLength " + this.senderName);
  }

  goToTagsPage() {
    this.navCtrl.push("InboxTagsPage");
  }

  /* showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select tags');

    for (let tag of this.tags) {
      alert.addInput({
        type: 'checkbox',
        label: tag.lable,
        value: tag.value
      });
    }

    
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;

        console.log(this.testCheckboxResult);
      }
    });


    alert.addButton({
      text: 'Add new tag',
      handler: () => {
        let prompt = this.alertCtrl.create({
        // title: 'New tag',
        message: "Add a new tag",
        inputs: [
          {
            name: 'newTag',
            placeholder: 'New tag'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log(data);
              this.newLabel = data.newTag;
              this.newValue = data.newTag.toLowerCase();
              this.tags.push({
                lable: this.newLabel,
                value: this.newValue
              });
            }
          }
        ]
      });
      prompt.present();
      } 
    });
    alert.addButton('Cancel');
    
    alert.present();
  } */
}
