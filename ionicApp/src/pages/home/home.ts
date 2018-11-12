import { Component } from '@angular/core';
// ,ViewChild
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
// import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;
  items = [];
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  
  // ionViewDidLoad(){
  //   this.ac.get();
  // }

  doInfinite(infiniteScroll){
    this.http.get('/api/course').subscribe(data=>{
      console.log(data);
    })
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
      if(this.items.length>90){
        infiniteScroll.enable();
      }
    }, 500);
    
  }
}
