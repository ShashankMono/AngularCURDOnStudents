import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../Services/student.service';

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

  constructor(private studentService:StudentService){}

  addStudentData(){
    this.studentService.addStudentData(this.studentForm.value).subscribe((data)=>{
      console.log(data);
    })
    console.log(this.studentForm.value)
  }
}
