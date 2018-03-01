import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  otrapagina(){
    this.navCtrl.push(MasinfoPage);
  }
}
