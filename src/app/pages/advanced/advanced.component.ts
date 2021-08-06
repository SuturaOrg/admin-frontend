import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { TableEventService } from '../../services/tableEvent.service';

@Component({
  selector: 'ngx-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit {
  @Input()
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
  @Input()
  entity = 'students';


  source: LocalDataSource;
  headers: HttpHeaders;
  sub;


  constructor(private route: ActivatedRoute,
              private service: SmartTableData,
              private http: HttpClient,
              private tableEventService: TableEventService) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzQ5IiwiaWF0IjoxNjI4MDc5NDU2LCJleHAiOjE2Mjg2ODQyNTZ9.8qNksg2mj7OdAiaDDxzEekOoJeESUZ7oC8-T9w_I_vk60TqVHvXIKCtsLHNcy73DTmzvYlZn2UDJIcXRwCYcjA';
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token }); // create header object
  }

  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(data => {
        this.entity = data.entity;
        this.settings = data.settings;
        console.log(data);
      },
      );
      this.tableEventService.loadEntity(this.entity, this.settings);
      this.source = this.tableEventService.source;
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
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

  onEditConfirm = this.tableEventService.onEditConfirm;
  onCreateConfirm = this.tableEventService.onCreateConfirm;
  onDeleteConfirm = this.tableEventService.onDeleteConfirm;
}
