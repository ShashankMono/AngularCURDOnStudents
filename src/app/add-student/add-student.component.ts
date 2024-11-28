import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm=new FormGroup({
    age:new FormControl,
    isMale:new FormControl,
    name:new FormControl,
    email:new FormControl,
    date:new FormControl,
    rollNo:new FormControl
  })

  constructor(private studentService:StudentService, private router:Router){}

  addStudentData(){
    this.studentService.addStudentData(this.studentForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/getStudent']);
    })
    console.log(this.studentForm.value)
  }
}
