import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SmartTableData } from '../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Injectable({
  providedIn: 'root'
})
export class EntityService implements OnInit{
  #settings;
  entity:string;
  source: LocalDataSource = new LocalDataSource();
  headers: HttpHeaders;

constructor(private service: SmartTableData, private http: HttpClient) { }
ngOnInit(): void {
  this.http.get<any>('http://localhost:8082/api/students/', { headers: this.headers }).subscribe(
    data => {
      this.source.load(data._embedded.students);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });
}
onEditConfirm(event): void {
  if (window.confirm('Are you sure you want to save?')) {

    const data =event.newData;
    this.http.patch<any>('http://localhost:8082/api/'+this.entity+'/' + event.newData.id, data, { headers: this.headers }).subscribe(
      async res => {
        console.log(event.data);
        event.confirm.resolve();
       // await this.source.update(event.data,res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });

  } else {
    event.confirm.reject();
  }
}
onCreateConfirm(event): void {
  if (window.confirm('Are you sure you want to create?')) {

    const data =event.newData;
    this.http.post<any>('http://localhost:8082/api/'+this.entity+'/', data, { headers: this.headers }).subscribe(
      async res => {
        console.log(res);
        await this.source.add(res);
       // await this.source.find(res);
        event.confirm.resolve();

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });

  } else {
    event.confirm.reject();
  }
}
onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    this.http.delete<any>('http://localhost:8082/api/'+this.entity+'/' + event.data.id, { headers: this.headers }).subscribe(
    async  data => {
        console.log(data);
       await this.source.remove(event.data);
       event.confirm.resolve();
      // await this.source.reset();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      });
  } else {
    event.confirm.reject();
  }
}

}
