import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
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
        title: 'Prénom',
      },
      email: {
        title: 'Email',
        filter: true
      },
      updatedAt: {
        title: 'Modifié',
        filter: true,
        editable: false,

      },
    }
  };


  source: LocalDataSource = new LocalDataSource();
  headers: HttpHeaders;


  constructor(private service: SmartTableData, private http: HttpClient) {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzQ5IiwiaWF0IjoxNjI4MDc5NDU2LCJleHAiOjE2Mjg2ODQyNTZ9.8qNksg2mj7OdAiaDDxzEekOoJeESUZ7oC8-T9w_I_vk60TqVHvXIKCtsLHNcy73DTmzvYlZn2UDJIcXRwCYcjA";
       this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });// create header object
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8082/api/students/', { headers: this.headers }).subscribe(
      data => {
        this.source.load(data._embedded.students);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }
  onSearch(query: string) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'email',
        search: query
      }
    ], false);
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {

      var data = {
        "email": event.newData.email,
        "prenom": event.newData.prenom
      };
      this.http.put<any>('http://localhost:8082/api/students/' + event.newData.id, data, { headers: this.headers }).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });

    } else {
      event.confirm.reject();
    }
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.http.delete<any>('http://localhost:8082/api/students/' + event.newData.id, { headers: this.headers }).subscribe(
        data => {
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });
    } else {
      event.confirm.reject();
    }
  }

}
