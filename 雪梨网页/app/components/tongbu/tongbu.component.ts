import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';//在目标组件中接收数据
import { Route } from '@angular/router/src/config';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router :ActivatedRoute,private route:Router) { }
  courseId:number;
  cor;
  ngOnInit() {
    this.http.get('/api/course').subscribe(data=>{
      this.cor=data;
    });


  }
  // go(){
  //   this.route.navigate(['/shequ']);//跳转到社区页面
  // }
  // change(){
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});//改变当前同步课页面的参数 查询参数 
  // }
}
