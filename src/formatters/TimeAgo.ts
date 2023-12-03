import TimeAgo from 'javascript-time-ago';
import TimeAgoEn from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(TimeAgoEn);

export function formatTimeAgo(date: Date): string {
  return new TimeAgo('en').format(date);
}
