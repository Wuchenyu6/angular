import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';//在目标组件中接收数据
import { Route } from '@angular/router/src/config';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router :ActivatedRoute,private route:Router) { }
  courseId:number;
  cor;
  ngOnInit() {
    this.http.get('/api/course3').subscribe(data=>{
      this.cor=data;
    });


  }

}
