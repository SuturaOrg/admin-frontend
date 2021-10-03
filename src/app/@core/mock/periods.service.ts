import {Injectable} from '@angular/core';

@Injectable()
export class PeriodsService {

  getLabels(period: string):string[] {
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
    const months= [
      'Jan', 'Fev', 'Mar',
      'Avr', 'Mai', 'Jun',
      'Jul', 'Aout', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
    const goBackDays = 12;

    const today = new Date();
    const daysSorted = [];

    for(let i = 0; i < goBackDays; i++) {
      daysSorted.unshift(months[today.getMonth()]);
      today.setDate(today.getDate() - 31);
    }
    return daysSorted

  }

  getWeeks() {
    const days = [
      'Dim',
      'Lun',
      'Mar',
      'Mer',
      'Jeu',
      'Ven',
      'Sam',
    ];
    const goBackDays = 7;

    const today = new Date();
    const daysSorted = [];

    for(let i = 0; i < goBackDays; i++) {
      daysSorted.unshift(days[today.getDay()]);
      today.setDate(today.getDate() - 1);
    }
    return daysSorted

  }
}
