import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  nIntervId: any = 1;
  imageIndex = 0;
  images: any = [
    'assets/Images/1.avif',
    'assets/Images/2.avif',
    'assets/Images/3.avif',
    'assets/Images/4.avif',
    'assets/Images/5.avif',
  ];
  next() {
    if (this.imageIndex < this.images.length - 1) {
      this.imageIndex++;
    }
  }
  previous() {
    if (this.imageIndex > 0) {
      this.imageIndex--;
    }
  }
  slide() {
    this.nIntervId = setInterval(() => {
      if (this.imageIndex < this.images.length - 1) {
        this.imageIndex++;
      } else {
        this.imageIndex = 0;
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.nIntervId);
  }
}
