import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  lista: Array<any> = [{
      Titulo:"Perro",
      Color:"#444"
  },{
    Titulo:"Gato",
    Color:"#999"
}]

  constructor(public navCtrl: NavController) {

  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
