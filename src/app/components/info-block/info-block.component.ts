import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jk-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent {
  @HostBinding('class.jk-info-block') className = true;
  @HostBinding('class.jk-info-block--full-width')
  @Input()
  fullWidth = true;

  @Input() header = '';
}
