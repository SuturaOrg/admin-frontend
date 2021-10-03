import {Injectable, OnInit} from '@angular/core';
import {PeriodsService} from './periods.service';
import {OrdersChart, OrdersChartData} from '../data/orders-chart';
import {ApiService} from '../../services/api.service';
import {ApiDataPeriodService} from './api-data-period.service';
import {forkJoin, Observable, Subject} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable()
export class OrdersChartService extends OrdersChartData implements OnInit {

  private year = [
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
  ];

  constructor(private period: PeriodsService, private apiDataPeriodService: ApiDataPeriodService) {
    super();
  }

  ngOnInit(): void {
  }

  private getDataForPeriod(entities: string[],period: string): Observable<OrdersChart> {
    const nPoints = 42;
    const defaultLinesData = entities.map(item => {
      const zeros = [];
      for (let i = 0; i < nPoints; i++) {
        zeros.push(0);
      }
      return zeros;
    });
    const ordersChart = {
      chartLabel: this.getDataLabels(nPoints, this.period.getLabels(period)),
      linesData: defaultLinesData,
    };
    const observables: Observable<number[]>[] = entities.map((entity, index) => {
      return this.apiDataPeriodService.get(entity, period, nPoints);
    });
    return new Observable(subscriber => {

      forkJoin(observables).subscribe((res) => {
          res.map((val, index) => {
            ordersChart.linesData[index] = val;
          });
          subscriber.next(<OrdersChart>ordersChart);
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
  getDataLabels(nPoints: number, labelsArray: string[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? labelsArray[dataIndex] : '';
    });
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    const entities = ['loans', 'contributions','refunds'];
      return this.getDataForPeriod(entities, period);

  }


}
