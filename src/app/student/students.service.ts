import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Students[]>('http://localhost:3000/students');
  }

 create(playload:Students) {
return this.http.post<Students>("http://localhost:3000/students",playload);
 }

getById(id:number){
  return this.http.get<Students>(`http://localhost:3000/students/${id}`);
}

update(playload:Students){
  return this.http.put<Students[]>(`http://localhost:3000/students/${playload.id}`,playload);
}

delete(id:number){
  return this.http.delete<Students>(`http://localhost:3000/students/${id}`);
}
}


