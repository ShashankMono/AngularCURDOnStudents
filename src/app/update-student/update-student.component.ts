import { Component } from '@angular/core';
import { StudentService } from '../Services/student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  studentForm=new FormGroup({
    age:new FormControl,
    isMale:new FormControl,
    name:new FormControl,
    email:new FormControl,
    date:new FormControl,
    rollNo:new FormControl
  })
  dataToBeUpdated:any='';
  updatedData:any='';
  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router){
    this.getDataToBeUpdated()
  }

  getDataToBeUpdated(){
    let studentDataToBeUpdated = this.route.queryParamMap.subscribe((data:any)=>{
      this.dataToBeUpdated=data.params
      let studentobj = {
        age:data.params.age,
        name:data.params.name,
        rollNo:data.params.rollNo,
        isMale:data.params.isMale,
        date:data.params.date,
        email:data.params.email
      }
      this.studentForm.setValue(studentobj)
    }
    );
  }

  updateStudentData(){
    this.studentService.updateStudent(this.studentForm.value,this.dataToBeUpdated.id).subscribe(()=>{
      alert("Data Updated successfully!");
      this.router.navigate(['/getStudent']);;
    });
  }
}
