import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import {ApiDataCountryService} from './api-data-country.service';

@Injectable()
export class CountryOrderService extends CountryOrderData {
  constructor(private apiDataCountryService: ApiDataCountryService) {
    super();
  }

  private countriesCategories = [
    'Loans',
    'Contributions',
    'Refunds',
    'Students',
    'Admins',
  ];
  private countriesCategoriesLength = this.countriesCategories.length;
  private generateRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 20);
    });
  }

  getCountriesCategories(): Observable<string[]> {
    return observableOf(this.countriesCategories);
  }

  getCountriesCategoriesData(country: string): Observable<number[]> {
    return this.apiDataCountryService.get(this.countriesCategories, country);
  }
}
