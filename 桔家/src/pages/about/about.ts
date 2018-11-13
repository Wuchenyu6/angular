import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides} from 'ionic-angular';
// import {  } from '@angular/core/src/metadata/di';
// import {  } from 'ionic-angular/components/slides/slides';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) sildes:Slides;

  isActive=0;
  arr=["客厅","卧室","餐厅","书房","门厅"];
  isClick(i){
    this.isActive=i;
  }


  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    
  }
  change(){
    console.log(this.sildes.getActiveIndex());

  }
}

