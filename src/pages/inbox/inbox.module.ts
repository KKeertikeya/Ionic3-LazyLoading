import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Pages
import { InboxPage } from './inbox';
import { InboxFiltersPageModule } from '../inbox-filters/inbox-filters.module';
import { InboxSettingsPageModule } from '../inbox-settings/inbox-settings.module';
import { InboxViewLatestConversationPageModule } from '../inbox-view-latest-conversation/inbox-view-latest-conversation.module';
import { InboxReplyToPostPageModule } from '../inbox-reply-to-post/inbox-reply-to-post.module';
// import { InboxTagsPageModule } from '../inbox-tags/inbox-tags.module';

// Generic components
import { ComposerSummaryComponentModule } from '../../components/generic-components/composer-summary/composer-summary.module';
import { ComposerDetailComponentModule } from '../../components/generic-components/composer-detail/composer-detail.module';
import { PostContentComponentModule } from '../../components/generic-components/post-content/post-content.module';
//actions buttons
import { ActionButtonsComponentModule } from '../../components/action-buttons/action-buttons.module';

import { InboxSearchPipeModule } from '../../pipes/inboxSearchPipe.module';
// import { InboxSearch } from '../../pipes/inboxSearch.pipe';


@NgModule({
  declarations: [
    InboxPage
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),

    // Other page modules
    InboxFiltersPageModule,
    InboxSettingsPageModule,
    InboxViewLatestConversationPageModule,
    InboxReplyToPostPageModule,

    // Component and pipe modules that are being used
    ComposerSummaryComponentModule,
    InboxSearchPipeModule,
    ComposerDetailComponentModule,

    //Action Buttons
    ActionButtonsComponentModule,
    
    // Action buttons modules
    PostContentComponentModule,
  ],
  exports: [
    InboxPage
  ]
})
export class InboxPageModule {}