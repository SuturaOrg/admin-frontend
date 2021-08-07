import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../@core/data/smart-table';

@Injectable({
  providedIn: 'root',
})
export class TableEventService {
  settings;
  entity;
  baseApi='http://localhost:8082/api/';

  source: LocalDataSource = new LocalDataSource();
  headers: HttpHeaders;


  constructor(private service: SmartTableData, private http: HttpClient) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDYiLCJpYXQiOjE2MjgzMzUzNjIsImV4cCI6MTYyODk0MDE2Mn0.e4g9xXditdJGHxUxN1rc2Jd0XAwSr-H4ghfXAIslz6uodqycpUQTbVaQdM_zi9X_O_c3Dlc3b2rE8-_I-6c3Lw';
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token }); // create header object
  }

  loadEntity(entity, settings) {
    this.entity = entity;
    this.settings = settings;
    this.http.get<any>(this.baseApi + this.entity + '/', { headers: this.headers }).subscribe(
      data => {
        this.source.load(data._embedded[this.entity]);
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
      this.http.patch<any>(this.baseApi + this.entity + '/' + event.newData.id, data, { headers: this.headers }).subscribe(
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
      this.http.post<any>(this.baseApi + this.entity + '/', data, { headers: this.headers }).subscribe(
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
    console.log(err);
    if (err.error instanceof Error) {
      console.log('Client-side error occured.');
    } else {
      console.log('Server-side error occured.');
    }

  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.http.delete<any>(this.baseApi + this.entity + '/' + event.data.id, { headers: this.headers }).subscribe(
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
