import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TimeSpan } from '../../utilities/data-models';
import * as dayjs from 'dayjs';

@Component({
  selector: 'jk-skill-listing',
  templateUrl: './skill-listing.component.html',
  styleUrls: ['./skill-listing.component.scss'],
})
export class SkillListingComponent {
  @HostBinding('class.jk-skill-listing') className = true;

  @Input() name: string;
  @Input() manualUsage: string;

  // usage could consist of multiple periods on & off - add them all together
  @Input() set usage(timeSpans: TimeSpan[]) {
    if (timeSpans?.length) {
      let months = 0;
      timeSpans.forEach((span) => {
        months += dayjs(span.endDate).diff(
          span.startDate || new Date().toISOString(),
          'months'
        );
      });
      this._Length = Math.round(months / 12);
    }
  }

  _Length: number = null;
}
