import { Injectable } from '@angular/core';
import {ApiDataPeriod} from '../data/api-data-period';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataPeriodService extends ApiDataPeriod{

  constructor(private http:HttpClient) {
    super();
  }

  get(entity: string, period: string): number[] {
    return [];
  }
}
