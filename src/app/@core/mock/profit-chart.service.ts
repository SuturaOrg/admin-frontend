import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';
import {forkJoin, Observable} from 'rxjs';
import {OrdersChart} from '../data/orders-chart';
import {ApiDataPeriodService} from './api-data-period.service';

@Injectable()
export class ProfitChartService extends ProfitChartData {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];


  constructor(private period: PeriodsService, private apiDataPeriodService: ApiDataPeriodService) {
    super();
  }
  private getDataForPeriod(entities: string[],period: string): Observable<ProfitChart> {
    const nPoints = this.period.getLabels(period).length;
    const defaultData = entities.map(item => {
      const zeros = [];
      for (let i = 0; i < nPoints; i++) {
        zeros.push(0);
      }
      return zeros;
    });
    const profitChart:ProfitChart = {
      chartLabel: this.period.getLabels(period),
      data:defaultData,
    };
    const observables: Observable<number[]>[] = entities.map((entity, index) => {
      return this.apiDataPeriodService.get(entity, period, nPoints);
    });
    return new Observable(subscriber => {

      forkJoin(observables).subscribe((res) => {
          res.map((val, index) => {
            profitChart.data[index] = val;
          });
          subscriber.next(profitChart);
          subscriber.complete();
        }, error => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );
    });

  }
  private getDataForWeekPeriod(): ProfitChart {
    const nPoint = this.period.getWeeks().length;

    return {
      chartLabel: this.period.getWeeks(),
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForMonthPeriod(): ProfitChart {
    const nPoint = this.period.getMonths().length;

    return {
      chartLabel: this.period.getMonths(),
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForYearPeriod(): ProfitChart {
    const nPoint = this.year.length;

    return {
      chartLabel: this.year,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 500);
    });
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    const entities = ['loans', 'contributions','refunds'];
    return this.getDataForPeriod(entities, period);

  }
}
