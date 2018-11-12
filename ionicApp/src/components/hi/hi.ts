import { Component } from '@angular/core';

/**
 * Generated class for the HiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hi',
  templateUrl: 'hi.html'
})
export class HiComponent {

  text: string;

  constructor() {
    console.log('Hello HiComponent Component');
    this.text = 'Hello World';
  }
  get(){
    console.log('a组件的方法');
  }
}
