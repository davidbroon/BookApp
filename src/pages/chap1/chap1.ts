import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TableOfContentsPage} from '../table-of-contents/table-of-contents';
import { Chap2Page } from '../chap2/chap2';

/**
 * Generated class for the Chap1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chap1',
  templateUrl: 'chap1.html',
})
export class Chap1Page {
toc = TableOfContentsPage;
chap2 = Chap2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap1Page');
  }

}
