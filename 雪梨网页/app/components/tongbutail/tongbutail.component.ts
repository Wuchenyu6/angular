import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//在目标组件中接收数据
import { HttpClient } from '@angular/common/http';
import {filter,map} from 'rxjs/operators';
@Component({
  selector: 'app-tongbutail',
  templateUrl: './tongbutail.component.html',
  styleUrls: ['./tongbutail.component.css']
})
export class TongbutailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/course/'+this.courseId).subscribe(data=>{
      console.log(data);
      this.course=data;
    })
  }

}



// .pipe(map(data=>{
//   data.name='ha';
//   return data;
// })).pipe(filter(data=>{
//   return data.id==3;
// }))