import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm;
  constructor(private http:HttpClient) {
    this.userForm= new FormGroup({
      'productName':new FormControl(''),
      'productId':new FormControl(''),
      'productSize':new FormControl(''),
      'productColor':new FormControl(''),
    })
  }

  ngOnInit() {
  }

  mySubmit(){
    console.log(this.userForm.value);
    this.http.post("http://localhost:8000/value",this.userForm.value)
      .subscribe((data)=>{
        console.log(data);
      })
  }

}
