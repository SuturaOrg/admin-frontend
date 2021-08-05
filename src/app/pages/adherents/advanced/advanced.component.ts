import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,

    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstname: {
        title: 'Firstname',
      },
      email: {
        title: 'Email',
        filter: true,
      },
      updatedAt: {
        title: 'Modifié',
        filter: true,
        editable: false,

      },
    },
  };


  source: LocalDataSource = new LocalDataSource();
  headers: HttpHeaders;


  constructor(private service: SmartTableData, private http: HttpClient) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzQ5IiwiaWF0IjoxNjI4MDc5NDU2LCJleHAiOjE2Mjg2ODQyNTZ9.8qNksg2mj7OdAiaDDxzEekOoJeESUZ7oC8-T9w_I_vk60TqVHvXIKCtsLHNcy73DTmzvYlZn2UDJIcXRwCYcjA';
       this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token }); // create header object
  }

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

      const data =event.newData;
      this.http.patch<any>('http://localhost:8082/api/students/' + event.newData.id, data, { headers: this.headers }).subscribe(
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
      this.http.post<any>('http://localhost:8082/api/students/', data, { headers: this.headers }).subscribe(
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
      this.http.delete<any>('http://localhost:8082/api/students/' + event.data.id, { headers: this.headers }).subscribe(
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
