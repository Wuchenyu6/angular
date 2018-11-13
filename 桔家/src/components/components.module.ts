import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { HiComponent } from './hi/hi';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AComponent,
    BComponent,
    HiComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(ComponentsModule)
    ],
	exports: [AComponent,
    BComponent,
    HiComponent]
})
export class ComponentsModule {}
