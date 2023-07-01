import { Component } from '@angular/core';
import { StudentService } from '../students.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Students } from '../students';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
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

  delete() {
    this.studentService.delete(this.studentsForm.id)
      .subscribe({
        next: (data: any) => {
          console.log("Student deleted successfully");
          this.router.navigate(["/home"]);
        },
        error: (err: any) => {
          console.log(err);
        } 
      });
  }
  }


