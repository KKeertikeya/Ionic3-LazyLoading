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
import { PostContentComponentModule } from '../../components/post-content/post-content.module'

import { InboxSearchPipeModule } from '../../pipes/inboxSearchPipe.module';
// import { InboxSearch } from '../../pipes/inboxSearch.pipe';


@NgModule({
  declarations: [
    InboxPage
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
    InboxFiltersPageModule,
    InboxSettingsPageModule,
    ComposerSummaryComponentModule,
    InboxSearchPipeModule,
    // InboxTagsPageModule,
    // InboxSearch,
    ComposerDetailComponentModule,
    FacebookCommentActionButtonsComponentModule,
    FacebookMessageActionButtonsComponentModule,
    PostContentComponentModule
  ],
  exports: [
    InboxPage
  ]
})
export class InboxPageModule {}