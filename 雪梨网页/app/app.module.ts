import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { RouterModule } from '@angular/router';//引入路由模块
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';//引入HTTP服务
import { HttpClient } from 'selenium-webdriver/http';
import { TongbutailComponent } from './components/tongbutail/tongbutail.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbutailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([//配置路由信息
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:'home',component:HomeComponent,children:[
        {path:'tongbu',component:TongbuComponent}
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbutailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'**',component:Child2Component}//通配符，如果上面的组件都匹配不到则匹配这一个，例如404
        ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
