import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TableOfContentsPage} from '../table-of-contents/table-of-contents';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toc = TableOfContentsPage;
  constructor(public navCtrl: NavController) {

  }

}
