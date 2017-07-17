import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* 
import { RetweetButtonComponentModule } from '../components/retweet-button/retweet-button.module';
import { ViewPostAndCommentsComponentModule } from '../components/view-post-and-comments/view-post-and-comments.module';
import { ShowInFacebookComponentModule } from '../components/show-in-facebook/show-in-facebook.module';
import { ShowMoreComponentModule } from '../components/show-more/show-more.module';
import { CommentsComponentModule } from '../components/comments/comments.module';
import { FollowBackComponentModule } from '../components/follow-back/follow-back.module';
 */

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
