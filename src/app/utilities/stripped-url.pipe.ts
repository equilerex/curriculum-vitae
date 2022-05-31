import { Pipe, PipeTransform } from '@angular/core';

// dayJs config
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

@Pipe({
  name: 'jkStrippedUrl',
  pure: false,
})
export class strippedUrlPipe implements PipeTransform {
  transform(input: string): string {
    return (input || '')
      .replace(/^https\:\/\//, '')
      .replace(/www\.+/g, '')
      .replace(/\/+/g, '/')
      .replace(/\/+$/, '');
  }
}
