import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { MessagePage } from '../pages/message/message';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { Profile2Page } from '../pages/profile2/profile2';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Search2Page } from '../pages/search2/search2';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../enviornments/enviornment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { PhotoLibrary } from '@ionic-native/photo-library';

import { AuthProvider } from '../providers/auth/auth';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    MessagePage,
    SearchPage,
    ProfilePage,
    Profile2Page,
    TabsControllerPage,
    LoginPage,
    RegisterPage,
    Search2Page,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagePage,
    SearchPage,
    ProfilePage,
    Profile2Page,
    TabsControllerPage,
    LoginPage,
    RegisterPage,
    Search2Page,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PhotoLibrary,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirestoreProvider,
    UserProvider
  ]
})
export class AppModule {}