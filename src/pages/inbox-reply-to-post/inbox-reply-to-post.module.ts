import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxReplyToPostPage } from './inbox-reply-to-post';

import { ComposerSummaryComponentModule } from '../../components/generic-components/composer-summary/composer-summary.module';
import { ComposerDetailComponentModule } from '../../components/generic-components/composer-detail/composer-detail.module';
import { PostContentComponentModule } from '../../components/generic-components/post-content/post-content.module';

@NgModule({
  declarations: [
    InboxReplyToPostPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxReplyToPostPage),
    ComposerSummaryComponentModule,
    ComposerDetailComponentModule,
    PostContentComponentModule,
    
  ],
  exports: [
    InboxReplyToPostPage
  ]
})
export class InboxReplyToPostPageModule {}
