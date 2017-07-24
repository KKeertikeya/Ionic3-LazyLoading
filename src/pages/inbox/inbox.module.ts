import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Pages
import { InboxPage } from './inbox';
import { InboxFiltersPageModule } from '../inbox-filters/inbox-filters.module';
import { InboxSettingsPageModule } from '../inbox-settings/inbox-settings.module';
import { InboxViewLatestConversationPageModule } from '../inbox-view-latest-conversation/inbox-view-latest-conversation.module';
// import { InboxTagsPageModule } from '../inbox-tags/inbox-tags.module';

// Generic components
import { ComposerSummaryComponentModule } from '../../components/generic-components/composer-summary/composer-summary.module';
import { ComposerDetailComponentModule } from '../../components/generic-components/composer-detail/composer-detail.module';
import { PostContentComponentModule } from '../../components/generic-components/post-content/post-content.module';
//actions buttons
import { ActionButtonsComponentModule } from '../../components/action-buttons/action-buttons.module';

// Major components
import { FacebookCommentActionButtonsComponentModule } from '../../components/action-buttons-components/facebook-comment-action-buttons/facebook-comment-action-buttons.module';
import { FacebookMessageActionButtonsComponentModule } from '../../components/action-buttons-components/facebook-message-action-buttons/facebook-message-action-buttons.module';
import { TwitterDmActionButtonsComponentModule } from '../../components/action-buttons-components/twitter-dm-action-buttons/twitter-dm-action-buttons.module';
import { TwitterNewFollowerActionButtonsComponentModule } from '../../components/action-buttons-components/twitter-new-follower-action-buttons/twitter-new-follower-action-buttons.module';
import { TwitterMentionActionButtonsComponentModule } from '../../components/action-buttons-components/twitter-mention-action-buttons/twitter-mention-action-buttons.module';
import { TwitterRetweetActionButtonsComponentModule } from '../../components/action-buttons-components/twitter-retweet-action-buttons/twitter-retweet-action-buttons.module';

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

    // Component and pipe modules that are being used
    ComposerSummaryComponentModule,
    InboxSearchPipeModule,
    ComposerDetailComponentModule,

    //Action Buttons
    ActionButtonsComponentModule,
    
    // Action buttons modules
    FacebookCommentActionButtonsComponentModule,
    FacebookMessageActionButtonsComponentModule,
    PostContentComponentModule,
    TwitterDmActionButtonsComponentModule,
    TwitterNewFollowerActionButtonsComponentModule,
    TwitterMentionActionButtonsComponentModule,
    TwitterRetweetActionButtonsComponentModule,
  ],
  exports: [
    InboxPage
  ]
})
export class InboxPageModule {}