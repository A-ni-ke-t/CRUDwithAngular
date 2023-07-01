import { Component } from '@angular/core';
import { StudentService } from '../students.service';
import { Router } from '@angular/router';
import { Students } from '../students';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  studentsForm:Students={
    id:0,
    firstName:'',
    city:'',
    age:0,
    country:''
  }
  constructor(private studentService:StudentService,private router:Router){}

  create(){
    this.studentService.create(this.studentsForm)
    .subscribe({
      next:(data:any)=>{
        this.router.navigate(["/home"]);
      },
      error:(err:any)=>{
        console.log(err);
      } 
    })
  }
}
