import {HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../@core/data/smart-table';

@Injectable({
  providedIn: 'root',
})
export class TableEventService {
  settings;
  entity;
  baseApi = 'http://localhost:8082/api/';

  source: LocalDataSource = new LocalDataSource();
  headers: HttpHeaders;


  constructor(private service: SmartTableData, private http: HttpClient) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMiIsImlhdCI6MTYyOTM5Nzk2OSwiZXhwIjoxNjMwMDAyNzY5fQ.VRUhFm6_3gtwEVPEcy_Yi533kP-texrVwBrCCLY5X9ZAFtfneCgUEfE9cDsqGe0LMAVkAQ7tI2H9Q81UrwsV8w';
    this.headers = new HttpHeaders({'Authorization': 'Bearer ' + token}); // create header object
  }

  loadEntity(entity, settings) {
    this.entity = entity;
    this.settings = settings;
    this.http.get<any>(this.baseApi + this.entity + '/', {headers: this.headers}).subscribe(
      async data => {
        let initialData: any[] = data._embedded[this.entity];
        await Promise.all(initialData.map(async item => {
          let studentPrimeDataInit;
          const studentPrimeData = await this.http.get<any>(this.baseApi + 'studentPrimes' + '/' + item.createdBy, {headers: this.headers}).toPromise();
          // console.log(studentPrimeDataInit);
          item.firstname = studentPrimeData.firstname;
          //console.log(studentPrimeData);
          item.lastname = studentPrimeData.lastname;
        }));
        console.log(initialData);
        this.source.load(initialData);
      },
      this.handleError);
  }

  onSearch(query: string) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'email',
        search: query,
      },
    ], false);
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {

      const data = event.newData;
      this.http.patch<any>(this.baseApi + this.entity + '/' + event.newData.id, data, {headers: this.headers}).subscribe(
        async res => {
          console.log(event.data);
          event.confirm.resolve();
          // await this.source.update(event.data,res);
        },
        this.handleError);

    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {

      const data = event.newData;
      this.http.post<any>(this.baseApi + this.entity + '/', data, {headers: this.headers}).subscribe(
        async res => {
          console.log(res);
          await this.source.add(res);
          // await this.source.find(res);
          event.confirm.resolve();

        },
        this.handleError);

    } else {
      event.confirm.reject();
    }
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log('Client-side error occured.', err);
    } else {
      console.log('Server-side error occured.', err);
    }

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.http.delete<any>(this.baseApi + this.entity + '/' + event.data.id, {headers: this.headers}).subscribe(
        async data => {
          console.log(data);
          await this.source.remove(event.data);
          event.confirm.resolve();
          // await this.source.reset();
        },
        this.handleError);
    } else {
      event.confirm.reject();
    }
  }
}
