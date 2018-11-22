import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap1Page } from '../chap1/chap1';
import { Chap2Page } from '../chap2/chap2';

@IonicPage()
@Component({
  selector: 'page-table-of-contents',
  templateUrl: 'table-of-contents.html',
})
export class TableOfContentsPage {
  //add variables to pages
  chap1 = Chap1Page;
  chap2 = Chap2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableOfContentsPage');
  }

}
