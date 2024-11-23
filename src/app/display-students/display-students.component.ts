import { Component } from '@angular/core';
import { StudentService } from '../Services/student.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent {

  studentData:any='';

  constructor(private studentService:StudentService, private router:Router){
    this.loadingData()
  }

  loadingData(){
    this.studentService.getStudentData().subscribe((data)=>{
      this.studentData=data;
      console.log(this.studentData)
    });
  }

  deleteStudentData(id:any){
    this.studentService.deleteStudent(id).subscribe(()=>{
      this.loadingData();
    });
  }

  updateStudent(studentData:any){
    this.router.navigate(['/updateStudent'],{queryParams:studentData})
  }
}
