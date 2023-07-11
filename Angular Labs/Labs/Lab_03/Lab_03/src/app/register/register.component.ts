import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  age = '';
  studentData = { studentName: '', studentAge: '' };
  @Output() sendStudentDataToAppComponent = new EventEmitter();
  getStudentData() {
    if (
      this.name.length > 3 &&
      parseInt(this.age) >= 20 &&
      parseInt(this.age) <= 40
    ) {
      this.sendStudentDataToAppComponent.emit({studentName:this.name , studentAge:this.age});
    }
  }
}
