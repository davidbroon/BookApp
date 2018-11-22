import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TableOfContentsPage } from '../pages/table-of-contents/table-of-contents';
import { Chap1Page } from '../pages/chap1/chap1';
import { Chap2Page } from '../pages/chap2/chap2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TableOfContentsPage,
    Chap1Page,
    Chap2Page
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TableOfContentsPage,
    Chap1Page,
    Chap2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
