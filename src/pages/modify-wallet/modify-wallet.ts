import { Component, OnInit } from '@angular/core';

import { NavParams, ViewController }  from 'ionic-angular';

import { Wallet } from '../../models/wallet';

import { WalletService } from '../../services/wallet';

@Component({
    selector:'page-modify-wallet',
    templateUrl:'./modify-wallet.html'
})

export class ModifyWalletPage implements OnInit{

    private wallet:Wallet;

    constructor (private navParams:NavParams, private walletService:WalletService,
                 private viewController:ViewController) {}

    ngOnInit () {
        this.getWallet();
    }

    dismiss () {
        this.viewController.dismiss();
    }


    getWallet () {
        this.wallet = this.navParams.get('wallet');
    }

    modifyWallet() {
        console.log(this.wallet);
        this.wallet.amount = 0;
        this.walletService.modifyWallet(this.wallet)
            .then(() => {
            this.dismiss();
        });
    }
}