import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InboxPage } from './inbox';
import { InboxFiltersPageModule } from '../inbox-filters/inbox-filters.module';
import { InboxSettingsPageModule } from '../inbox-settings/inbox-settings.module';
// import { InboxTagsPageModule } from '../inbox-tags/inbox-tags.module';

import { ComposerSummaryComponentModule } from '../../components/composer-summary/composer-summary.module';
import { ComposerDetailComponentModule } from '../../components/composer-detail/composer-detail.module';
import { FacebookCommentActionButtonsComponentModule } from '../../components/facebook-comment-action-buttons/facebook-comment-action-buttons.module';
import { FacebookMessageActionButtonsComponentModule } from '../../components/facebook-message-action-buttons/facebook-message-action-buttons.module';
import { PostContentComponentModule } from '../../components/post-content/post-content.module';

import { TwitterDmActionButtonsComponentModule } from '../../components/twitter-dm-action-buttons/twitter-dm-action-buttons.module';
import { TwitterNewFollowerActionButtonsComponentModule } from '../../components/twitter-new-follower-action-buttons/twitter-new-follower-action-buttons.module';
import { TwitterMentionActionButtonsComponentModule } from '../../components/twitter-mention-action-buttons/twitter-mention-action-buttons.module';
import { TwitterRetweetActionButtonsComponentModule } from '../../components/twitter-retweet-action-buttons/twitter-retweet-action-buttons.module';

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

    // Component and pipe modules that are being used
    ComposerSummaryComponentModule,
    InboxSearchPipeModule,
    ComposerDetailComponentModule,

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