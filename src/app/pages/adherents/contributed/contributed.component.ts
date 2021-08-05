import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-contributed',
  templateUrl: './contributed.component.html',
  styleUrls: ['./contributed.component.scss']
})
export class ContributedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
        title: 'xd',
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
  entity='funds';


}
