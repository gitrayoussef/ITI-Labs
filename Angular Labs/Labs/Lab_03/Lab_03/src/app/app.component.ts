import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lab_03';
  studentData:any = "";
  studentsData:any = [];
  getStudentObject(data: any) {
    this.studentData = data;   
    this.studentsData.push(this.studentData);  
    console.log(this.studentsData);
  }
}
