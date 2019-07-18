import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProviderMonitoringProvider } from '../providers/provider-monitoring/provider-monitoring';

const firebaseConfig = {
  apiKey: "AIzaSyA4ntKMi5tNSgsxPG7blWSpM-nCuW-juVI",
  authDomain: "monitoring-58469.firebaseapp.com",
  databaseURL: "https://monitoring-58469.firebaseio.com",
  projectId: "monitoring-58469",
  storageBucket: "monitoring-58469.appspot.com",
  messagingSenderId: "599930916246"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    ProviderMonitoringProvider
  ]
})
export class AppModule {}
