import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url='http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
  constructor(private http:HttpClient) {}//the main http part
  getStudentData(){
    return this.http.get(this.url);
  }

  addStudentData(data:any){
    return this.http.post(this.url,data)
  }

  deleteStudent(id:any){
    return this.http.delete(this.url+'/'+id)
  }

  updateStudent(studentObj:any,id:any){
    return this.http.put(this.url+"/"+id,studentObj);
  }
}
