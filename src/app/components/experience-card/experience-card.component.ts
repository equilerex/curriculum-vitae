import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Experience } from '../../utilities/data-models';

@Component({
  selector: 'jk-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @HostBinding('class.jk-experience-card') className = true;

  @Input() experience: Experience;
}
