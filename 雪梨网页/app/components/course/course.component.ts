import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';//在目标组件中接收数据
import { Route } from '@angular/router/src/config';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router :ActivatedRoute,private route:Router) { }
  courseId:number;
  cor;
  ngOnInit() {
    this.http.get('/api/course2').subscribe(data=>{
      this.cor=data;
    });


  }

}
