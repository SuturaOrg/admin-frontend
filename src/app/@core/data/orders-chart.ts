import {Observable} from 'rxjs';

export interface OrdersChart {
  chartLabel: string[];
  linesData: number[][];
}

export abstract class OrdersChartData {
  abstract getOrdersChartData(period: string): Observable<OrdersChart>;
}
