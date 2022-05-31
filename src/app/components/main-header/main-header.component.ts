import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jk-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  @HostBinding('class.jk-main-header') className = true;

  @Input() firstName = '';
  @Input() lastName = '';
  @Input() email? = '';
  @Input() countryCode? = '';
  @Input() phone? = '';
  @Input() jobTitle? = '';
  @Input() location? = '';
  @Input() linkedin? = '';
  @Input() pdfCvUrl? = '';
}
