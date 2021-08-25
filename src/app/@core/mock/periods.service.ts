import {Injectable} from '@angular/core';

@Injectable()
export class PeriodsService {

  getLabels(period: string) {
    switch (period) {
      case 'week':
        return this.getWeeks();
        break;
      case 'month':
        return this.getMonths();
        break;
      case 'year':
        return this.getYears();
        break;

    }
  }

  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
  }

  getWeeks() {
    return [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ];
  }
}
