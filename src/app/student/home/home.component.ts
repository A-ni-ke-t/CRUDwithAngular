import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students.service';
import { Students } from '../students';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
students:Students[]=[];
  
  constructor(private studentService:StudentService) {}
  
  ngOnInit(): void {
    this.get();
    }
 get(){
   this.studentService.get().subscribe((data)=>{
     this.students=data;
})
 }
}
