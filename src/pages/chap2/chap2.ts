import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap1Page } from '../chap1/chap1';
import { TableOfContentsPage } from '../table-of-contents/table-of-contents';

@IonicPage()
@Component({
  selector: 'page-chap2',
  templateUrl: 'chap2.html',
})
export class Chap2Page {
chap1 = Chap1Page;
toc = TableOfContentsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap2Page');
  }

}
