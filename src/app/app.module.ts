import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { AddCashFlowComponent } from '../components/add-cash-flow/add-cash-flow'

import { AlertService } from '../services/alert';
import { CashFlowService } from '../services/cash-flow';
import { HelperService } from '../services/helper';
import { ModalService } from '../services/modal';
import { WalletService } from '../services/wallet';
import { StorageService } from '../services/storage';

import { AddCashFlowPage } from '../pages/add-cash-flow/add-cash-flow';
import { AddWalletPage } from '../pages/add-wallet/add-wallet';
import { CashFlowsPage } from '../pages/cash-flows/cash-flows';
import { HomePage } from '../pages/home/home'
import { LogInPage } from '../pages/log-in/log-in'
import { ModifyCashFlowPage } from '../pages/modify-cash-flow/modify-cash-flow';
import { ModifyWalletPage } from '../pages/modify-wallet/modify-wallet';
import { WalletsPage } from '../pages/wallets/wallets';

@NgModule({
  declarations: [
    AppComponent,
    AddCashFlowComponent,
    AddCashFlowPage,
    AddWalletPage,
    CashFlowsPage,
    HomePage,
    LogInPage,
    ModifyCashFlowPage,
    ModifyWalletPage,
    WalletsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    AddCashFlowComponent,
    AddCashFlowPage,
    AddWalletPage,
    CashFlowsPage,
    HomePage,
    LogInPage,
    ModifyCashFlowPage,
    ModifyWalletPage,
    WalletsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertService,
    CashFlowService,
    HelperService,
    ModalService,
    StorageService,
    WalletService
  ]
})
export class AppModule {}
