import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8000/value")
      .subscribe((data)=>{
        this.result=data;
        console.log(this.result);
      })
  }

}
