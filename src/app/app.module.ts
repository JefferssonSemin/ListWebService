import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotasPage } from '../pages/notas/notas';

import { HttpClientModule } from '@angular/common/http'
import { WebserviceProvider } from '../providers/webservice/webservice';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { PrevisaoPage } from '../pages/previsao/previsao';

@NgModule({
  declarations: [
    MyApp,
    PrevisaoPage,
    NotasPage,
    DetalhesPage,
    
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrevisaoPage,
    NotasPage,
    DetalhesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider
  ]
})
export class AppModule {}
