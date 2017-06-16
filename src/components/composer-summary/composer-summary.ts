import { Component, Input } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'composer-summary',
  templateUrl: 'composer-summary.html'
})
export class ComposerSummaryComponent {

  @Input() senderName: string;
  @Input() senderType: string;

  testCheckboxOpen;
  testCheckboxResult;

  newLabel: string = '';
  newValue: string = '';

  tags = [
    {
      lable: 'Important',
      value: 'important'
    },
    {
      lable: 'Test',
      value: 'test'
    },
    {
      lable: 'Leads',
      value: 'leads'
    },
    {
      lable: 'Followup',
      value: 'followup'
    },
    {
      lable: 'Positive',
      value: 'positive'
    }
  ]

  constructor(private alertCtrl: AlertController) {
    
  }

  showCheckbox() {
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
  }
}
