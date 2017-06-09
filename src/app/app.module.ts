import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InboxPage } from '../pages/inbox/inbox';
import { PlatformHeaderComponent} from './platform-header/platform-header.component'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageComponent } from '../components/message/message';
import { ComposerDetailComponent } from '../components/composer-detail/composer-detail';
import { ComposerSummaryComponent } from '../components/composer-summary/composer-summary';
import { FacebookMessageActionButtonsComponent } from '../components/facebook-message-action-buttons/facebook-message-action-buttons';
import { FacebookCommentActionButtonsComponent } from '../components/facebook-comment-action-buttons/facebook-comment-action-buttons';
import { PostContentComponent } from '../components/post-content/post-content';

@NgModule({
  declarations: [
    MyApp,
    PlatformHeaderComponent,
    HomePage,
    ListPage,
    InboxPage,
    MessageComponent,
    ComposerDetailComponent,
    ComposerSummaryComponent,
    FacebookMessageActionButtonsComponent,
    FacebookCommentActionButtonsComponent,
    PostContentComponent,
    PostContentComponent
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
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
