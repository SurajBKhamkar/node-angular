import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  students: any;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    var result = this.http.get("http://localhost:7500/students");

    result.subscribe((data)=>{
      console.log(data);
      this.students = data;
    });
  }

}
