import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

import { Subject } from 'rxjs';

// dayJs config
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

@Pipe({
  name: 'jkDateFormat',
  pure: false,
})
export class dateFormatPipe implements PipeTransform {
  transform(
    input: dayjs.ConfigType,
    format = 'lll',
    useFromNow = false
  ): string {
    const d = dayjs(input);
    if (!input || !d.isValid()) {
      return '';
    }

    const lessThanADay = [-1, 0, 1].includes(dayjs(Date.now()).diff(d, 'day'));
    return useFromNow && lessThanADay ? d.fromNow() : d.format(format);
  }
}
