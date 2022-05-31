import { Component, HostBinding } from '@angular/core';
// @ts-ignore
import * as data from '../assets/my-cv-data.json';
import { CvStructure } from './utilities/data-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.app-root') className = true;

  title = 'curriculum-vitae';
  cv: CvStructure = data;

  constructor() {
    document.title = `${this.cv.firstName} ${this.cv.lastName} | Curriculum Vitae`;
  }
}
