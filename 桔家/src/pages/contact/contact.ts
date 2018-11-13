import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
// @IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

  }
  ionViewDidLoad() {
   //console.log(this.navParams.get('id'));
   let profileModal = this.modalCtrl.create(AddPage);
   profileModal.present();
 }
}
