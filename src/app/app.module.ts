import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InboxPage } from '../pages/inbox/inbox';
import { InboxFiltersPage } from '../pages/inbox-filters/inbox-filters'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComposerDetailComponent } from '../components/composer-detail/composer-detail';
import { ComposerSummaryComponent } from '../components/composer-summary/composer-summary';
import { FacebookMessageActionButtonsComponent } from '../components/facebook-message-action-buttons/facebook-message-action-buttons';
import { FacebookCommentActionButtonsComponent } from '../components/facebook-comment-action-buttons/facebook-comment-action-buttons';
import { PostContentComponent } from '../components/post-content/post-content';

import { InboxFilter } from './inboxFilter.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InboxPage,
    InboxFiltersPage,
    ComposerDetailComponent,
    ComposerSummaryComponent,
    FacebookMessageActionButtonsComponent,
    FacebookCommentActionButtonsComponent,
    PostContentComponent,
    PostContentComponent,
    InboxFilter
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InboxPage,
    InboxFiltersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
