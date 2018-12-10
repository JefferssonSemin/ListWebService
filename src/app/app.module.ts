import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RotasPage } from '../pages/rotas/rotas';

import { HttpClientModule } from '@angular/common/http'
import { WebserviceProvider } from '../providers/webservice/webservice';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { PrevisaoPage } from '../pages/previsao/previsao';
import { MapPage } from '../pages/map/map';
import { BeginPage } from '../pages/begin/begin';

@NgModule({
  declarations: [
    MyApp,
    PrevisaoPage,
    RotasPage,
    DetalhesPage,
    MapPage,
    TabsPage,
    BeginPage
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
    RotasPage,
    DetalhesPage,
    TabsPage,
    MapPage,
    BeginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider
  ]
})

export class AppModule {
  rootPage:any = BeginPage;
}
