import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path:"addStudent",
    component:AddStudentComponent
  },
  {
    path:"getStudent",
    component:DisplayStudentsComponent
  },
  {
    path:"updateStudent",
    component:UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
