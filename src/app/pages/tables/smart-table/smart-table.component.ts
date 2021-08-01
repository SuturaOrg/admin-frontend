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
      prenom: {
        title: 'Prénom',
        addable: false
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
  headers:HttpHeaders;


  constructor(private service: SmartTableData, private http: HttpClient) {
const token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjI3NzAzMTIxLCJleHAiOjE2MjgzMDc5MjF9.4BY9J3G6D2Cujzs-MqbvK-euTA3BBq9CtbhpRuPWW_qbCWu-v9H2IapK5dtmFRHTQPrEP1QJj310387rE3bVaQ"
this.headers = new HttpHeaders({'Authorization': 'Bearer ' + token});// create header object
  
}

  ngOnInit(): void {
    console.log("jkj")
    this.http.get<any>('http://localhost:8082/api/etudiants/',{ headers:this.headers}).subscribe(
      data => {
        console.log("hjb", data._embedded.etudiants);
        this.source.load(data._embedded.etudiants);
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
      this.http.put<any>('http://localhost:8082/api/etudiants/' + event.newData.id, data,{ headers:this.headers}).subscribe(
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
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
