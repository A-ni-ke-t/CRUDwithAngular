import { Component } from '@angular/core';
import { StudentService } from '../students.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Students } from '../students';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  studentsForm:Students={
    id:0,
    firstName:'',
    city:'',
    age:0,
    country:''
  }
  constructor(private studentService:StudentService,private router:Router, route:ActivatedRoute){}

  getById(id:number){
    this.studentService.getById(id).subscribe((data)=>{
      this.studentsForm=data;
    })
  }

  update(){
    this.studentService.update(this.studentsForm)
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
