import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Experience, ExperienceTask } from '../../utilities/data-models';

@Component({
  selector: 'jk-experience-card-task',
  templateUrl: './experience-card-task.component.html',
  styleUrls: ['experience-card-task.component.scss'],
})
export class ExperienceCardTaskComponent {
  @HostBinding('class.jk-experience-card-task') className = true;

  @Input() set task(value: ExperienceTask) {
    if (typeof value === 'string') {
      this.text = value;
    } else {
      this.text = value.text;
      this.tasks = value.tasks;
      this.link = value.link;
    }
  }

  text: string;
  link: string;
  tasks: string[];
}
