import {of as observableOf, Observable, forkJoin} from 'rxjs';
import {Injectable} from '@angular/core';
import {OrdersChart, OrdersChartData} from '../data/orders-chart';
import {OrderProfitChartSummary, OrdersProfitChartData} from '../data/orders-profit-chart';
import {ProfitChart, ProfitChartData} from '../data/profit-chart';
import {ApiService} from '../../services/api.service';
import {map} from 'rxjs/operators';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {


  constructor(private ordersChartService: OrdersChartData,
              private profitChartService: ProfitChartData,
              private apiService: ApiService) {
    super();
  }

  getSingleChartSummary(name: string, entities: string[]): Observable<OrderProfitChartSummary> {
    let transactionsCount = 0;
    const observables: Observable<number>[] = entities.map((entity, index) => {
      return this.apiService.get(entity).pipe(map(value => {
        return value.page.totalElements;
      }));
    });
    return new Observable(subscriber => {

      forkJoin(observables).subscribe((res) => {
          transactionsCount = res.reduce((previousValue, currentValue) => previousValue + currentValue);
          const summary =
            {
              title: name,
              value: transactionsCount,
            };
          subscriber.next(summary);
        }, error => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );
    });
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return forkJoin(
      this.getSingleChartSummary('Transactions', ['loans', 'contributions']),
      this.getSingleChartSummary('Adhérents', ['students', 'admins']));
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return this.ordersChartService.getOrdersChartData(period);
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return this.profitChartService.getProfitChartData(period);
  }
}
