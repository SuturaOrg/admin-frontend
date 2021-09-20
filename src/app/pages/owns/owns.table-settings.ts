import {HttpClient, HttpHeaders, HttpXhrBackend} from '@angular/common/http';
import {ImageUploadComponent} from '../advanced/image-upload/image-upload.component';
import {LinkComponent} from '../advanced/link/link.component';

export const ownsTableSettings = {
  contributions: {
     pending: {
      settings: {
        actions: {
          add: false,
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
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Amount',
            filter: true,
          },
          period: {
            title: 'Period',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          expiration: {
            title: 'Expiration date',
            filter: true,
            editable: false,
          },
          proof: {
            title: 'Proof',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            },
            editable: false,
          },
        },
        autofilter: [{
          column: 'approved',
          value: "false",
        },
        {
          column: 'status',
          value: "false",
        }],
        joints: [
          {
            entity: 'studentPrime',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'contributions',
    },
     all: {
      settings: {
        actions: {
          add: false,
        },
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
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          period: {
            title: 'Period',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          expiration: {
            title: 'Expiration date',
            filter: true,
            editable: false,
          },
        },
        autofilter: [{
          column: 'status',
          value: "false",
        }],
      },
      entity: 'contributions',
    },
  },

  loans: {
    chosen: {
      settings: {
        actions: {
          add: false,
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: false,
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
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false
          },
          amount: {
            title: 'Amount',
            editable: false,
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          priority: {
            title: 'Priority',
            filter: true,
            editable: false,
          },
          RIB: {
            title: 'RIB',
          },
          phone: {
            title: 'Phone',
            editable: false,
          },
        },
        autofilter: [{
          column: 'status',
          value: 'CHOSEN',
        }],
        joints: [
          {
            entity: 'studentPrime',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'loans',

    },
    finished: {
      settings: {
        actions: {
          add: false,
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: false,
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: true,

        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: false,
        },
        columns: {
          firstname: {
            title: 'Firstname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          amountRefund: {
            title: 'Amount refunded',
            editable: false
          },
          sliceCount: {
            title: 'Slices',
            editable: false
          },
          phone: {
            title: 'Phone',
            editable: false
          },
          statusRefund: {
            title: 'Refunded',
            editable: false
          },
          proof: {
            title: 'Proof',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            },
            editable: false
          },
        },
        autofilter: [{
          column: 'status',
          value: 'FINISHED',
        }],
        joints: [
          {
            entity: 'studentPrime',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'loans',
    },
    pending: {
      settings: {
        actions: {
          add: false,
        },
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
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Amount',
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          comment: {
            title: 'Comment',
            editable: false,
          },
          phone: {
            title: 'Phone',
            editable: false,
          },
          proof: {
            title: 'Proof',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            },
            editable: false,
          },
        },
        autofilter: [{
          column: 'status',
          value: 'NEW',
        }],
        joints: [
          {
            entity: 'studentPrime',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'loans',

    },
    refunded: {
      settings: {
        actions: {
          add: false,
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: false,
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: false,

        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: false,
        },
        columns: {
          firstname: {
            title: 'Firstname',
          },
          lastname: {
            title: 'Lastname',
            filter: true,
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          amountRefunded: {
            title: 'Amount refunded',
          },
          sliceCount: {
            title: 'Slices',
          },
          phone: {
            title: 'Phone',
          },
        },
        autofilter: [{
          column: 'statusRefund',
          value: 'true',
        }],
        joints: [
          {
            entity: 'studentPrime',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'loans',
    },
    all: {
      settings: {
        actions: {
          add: false,
        },
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
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Lastname',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          status: {
            title: 'Status',
            editable: false,
          },
          priority: {
            title: 'Priority',
            editable: false,
          },
          reason: {
            title: 'Reason',
            editable: false,
          },
          phone: {
            title: 'Phone',
            editable: false,
          },
        },
        joints: [
          {
            entity: 'studentPrimes',
            field: 'createdBy',
            columns: ['firstname', 'lastname'],
          },
        ],
      },
      entity: 'loans',
    },
  },
  parameters: {
    settings: {
      actions: {
        add: false,
      },
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
        period: {
          title: 'Period',
        },
        expiration: {
          title: 'Expiration',
        },
        updatedAt: {
          title: 'UpdatedAt',
          filter: true,
          editable: false,
        },
      },
    },
    entity: 'parameters',
  },
  refunds: {
    pending: {
    settings: {
      actions: {
        add: false,
      },
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
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.firstname;
          },
          editable: false,
        },
        lastname: {
          title: 'Lastname',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.lastname;
          },
          editable: false,
        },
        amount: {
          title: 'Amount',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Period',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'Date',
          filter: true,
          editable: false,
        },
        type: {
          title: 'Type',
          filter: true,
          editable: false,
        },
        proof: {
          title: 'Proof',
          type: 'custom',
          renderComponent:LinkComponent,
          editor: {
            type: 'custom',
            component: ImageUploadComponent,
          },
          editable: false,
        },
      },
      autofilter: [{
        column: 'approved',
        value: "false",
      },
      {
        column: 'status',
        value: "false",
      }],
    },
    entity: 'refunds',
  },
  all: {
    settings: {
      actions: {
        add: false,
      },
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
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.firstname;
          },
          editable: false,
        },
        lastname: {
          title: 'Lastname',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.lastname;
          },
          editable: false,
        },
        amount: {
          title: 'Amount',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Period',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'Date',
          filter: true,
          editable: false,
        },
        type: {
          title: 'Type',
          filter: true,
          editable: false,
        },
      },
      autofilter: [{
        column: 'status',
        value: "false",
      }],
    },
    entity: 'refunds',
  },
 },
  funds: {
    settings: {
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
        isFavorable: {
          title: 'IsFavorable',
          editable: false,
        },
        threshold: {
          title: 'Threshold',
          editable: false,
        },
        amountFund: {
          title: 'Amount Fund',
          filter: true,
          editable: false,
        },
        currentAmount: {
          title: 'CurrentAmount',
          filter: true,
          editable: false,
        },
        period: {
          title: 'period',
          filter: true,
        },
      },
    },
    entity: 'funds',
  },

  donations: {
    settings: {
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
        contributor: {
          title: 'Contributor',
          editable: false,
        },
        createdBy: {
          title: 'Admin',
          editable: false,
        },
        amount: {
          title: 'Amount',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Period',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'date',
          filter: true,
          editable: false,
        },
        proof: {
          title: 'Proof',
          type: 'custom',
          renderComponent:LinkComponent,
          editor: {
            type: 'custom',
            component: ImageUploadComponent,
          },
          editable: false,
        },
      },
    },
    entity: 'donations',
  },

  expenses: {
      settings: {
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
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          createdBy: {
            title: 'Admin',
            editable: false,
          },
          period: {
            title: 'Period',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            filter: true,
            editable: false,
          },
          proof: {
            title: 'Proof',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            },
            editable: false,
          },
        },
      },
      entity: 'expenses',

    },

  adherents: {
    contributed: {
      settings: {
        actions: {
          add: false,
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
            editable: false,
          },
          lastname: {
            title: 'Lastname',
            editable: false,
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Town',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Total amount',
            editable: false,
          },
          totalPeriods: {
            title: 'Total periods',
            filter: true,
            editable: false,
          },
        },
        pager: {
          display: true,
          perPage: 5,
        },
        filters: [
          {
            contribution: [],
          },
        ],
        autofilter: [{
          column: 'projection',
          value: 'contributionsProjection',
        }, {
          column: 'transactionHistory.contributed',
          value: 'true',
        },
        {
          column: 'enabled',
          value: "true",
        }
        ],
      },
      entity: 'students',

    },
    notContributed: {
      settings: {
        actions: {
          add: false,
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: false,
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: false,

        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true,
        },
        columns: {
          firstname: {
            title: 'Firstname',
            editable: false,
          },
          lastname: {
            title: 'Lastname',
            editable: false,
          },
          town: {
            title: 'Town',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Total amount',
            filter: true,
            editable: false,
          },
          totalPeriods: {
            title: 'Total periods',
            filter: true,
            editable: false,
          },
        },
        autofilter: [{
          column: 'projection',
          value: 'contributionsProjection',
        },
          {
            column: 'transactionHistory.contributed',
            value: 'false',
          }],
      },
      entity: 'students',

    },

    administrators: {
          settings: {
            actions: {
              add: false,
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
                editable: false,
              },
              lastname: {
                title: 'Lastname',
                editable: false,
              },
              position: {
                title: 'Position',
                editable: false,
              },
              amount: {
                title: 'Amount',
                filter: true,
                editable: false,
              },
              town: {
                title: 'Town',
                filter: true,
                editable: false,
              },
              totalAmount: {
                title: 'Total amount',
                editable: false,
              },
              totalPeriods: {
                title: 'Total periods',
                filter: true,
                editable: false,
              },
              picture: {
                title: 'Profil',
                type: 'custom',
                renderComponent:LinkComponent,
                editor: {
                  type: 'custom',
                  component: ImageUploadComponent,
                },
                editable: false,
              },
            },
            pager: {
              display: true,
              perPage: 5,
            },
            filters: [
              {
                contribution: [],
              },
            ],
            autofilter: [
              {
                column: 'projection',
                value: 'contributionsProjection',
              },
              {
                column: 'transactionHistory.notContributed',
                value: 'true',
              },
              {
                column: 'enabled',
                value: 'true',
              }
            ],
          },
          entity: 'admins',

        },


    students: {
      settings: {
        actions: {
          add: false,
        },
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
          lastname: {
            title: 'Lastname',
          },
          duration: {
            title: 'Duration',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Town',
            filter: true,
          },
          phone: {
            title: 'Phone',
            filter: true,
          },
          email: {
            title: 'email',
            filter: true,
          },
          faculty: {
            title: 'faculty',
            filter: true,
          },
          picture: {
            title: 'Profil',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            }
          },
        },
        autofilter: [{
          column: 'projection',
          value: 'contributionsProjection',
        },
        {
          column: 'enabled',
          value: 'true',
        }
        ],
      },
      entity: 'students',
    }
  },

  trash: {
      loans: {
        settings: {
          actions: {
            add: false,
          },
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
            lastname: {
              title: 'Lastname',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              }
            },
            amount: {
              title: 'Amount',
              filter: true,
              editable: false,
            },
            createdAt: {
              title: 'Date',
              filter: true,
              editable: false,
            },
            status: {
              title: 'Status',
            },
            priority: {
              title: 'Priority',
            },
            reason: {
              title: 'Reason',
            },
            phone: {
              title: 'Phone',
            },
          },
          autofilter: [{
            column: 'status',
            value: "SUPPRIME",
          }],
          joints: [
            {
              entity: 'studentPrime',
              columns: ['firstname', 'lastname'],
            },
          ],
        },
        entity: 'loans',
      },
      contributions: {
        settings: {
          actions: {
            add: false,
          },
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
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.firstname;
              }
            },
            lastname: {
              title: 'Lastname',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              }
            },
            amount: {
              title: 'Amount',
              filter: true,
              editable: false,
            },
            period: {
              title: 'Period',
              filter: true,
            },
            createdAt: {
              title: 'Date',
              filter: true,
            },
            expiration: {
              title: 'Expiration date',
              filter: true,
            },
          },
          autofilter: [{
            column: 'status',
            value: "true",
          }],
          joints: [
            {
              entity: 'studentPrime',
              columns: ['firstname', 'lastname'],
            },
          ],
        },
        entity: 'contributions',
      },
      refunds: {
        settings: {
          actions: {
            add: false,
          },
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
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.firstname;
              }
            },
            lastname: {
              title: 'Lastname',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              }
            },
            amount: {
              title: 'Amount',
              filter: true,
              editable: false,
            },
            period: {
              title: 'Period',
              filter: true,
            },
            createdAt: {
              title: 'Date',
              filter: true,
            },
            type: {
              title: 'Type',
              filter: true,
            },
          },
          autofilter: [{
            column: 'status',
            value: "true",
          }],
          joints: [
            {
              entity: 'studentPrime',
              columns: ['firstname', 'lastname'],
            },
          ],
        },
        entity: 'refunds',
      },
    donations: {
      settings: {
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
          contributor: {
            title: 'Contributor',
          },
          admin: {
            title: 'Admin',
          },
          amount: {
            title: 'Amount',
            filter: true,
            editable: false,
          },
          period: {
            title: 'Period',
            filter: true,
          },
          createdAt: {
            title: 'date',
            filter: true,
          },
        },
      },
      entity: 'donations',
    },
    students: {
      settings: {
        actions: {
          add: false,
        },
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
          lastname: {
            title: 'Lastname',
          },
          duration: {
            title: 'Duration',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Town',
            filter: true,
          },
          phone: {
            title: 'Phone',
            filter: true,
          },
          email: {
            title: 'email',
            filter: true,
          },
          faculty: {
            title: 'faculty',
            filter: true,
          },
        },
        autofilter: [{
          column: 'projection',
          value: 'contributionsProjection',
        },
        {
          column: 'enabled',
          value: 'false',
        },
        ],
      },
      entity: 'students',
    },
    administrators: {
      settings: {
        actions: {
          add: false,
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
          lastname: {
            title: 'Lastname',
          },
          position: {
            title: 'Position',
          },
          amount: {
            title: 'Amount',
            filter: true,
          },
          town: {
            title: 'Town',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Total amount',
          },
          totalPeriods: {
            title: 'Total periods',
            filter: true,
          },
          picture: {
            title: 'Profil',
            type: 'custom',
            renderComponent:LinkComponent,
            editor: {
              type: 'custom',
              component: ImageUploadComponent,
            }
          },
        },
        pager: {
          display: true,
          perPage: 5,
        },
        filters: [
          {
            contribution: [],
          },
        ],
        autofilter: [{
          column: 'projection',
          value: 'contributionsProjection',
        },
        {
          column: 'enabled',
          value: 'false',
        }
        ],
      },
      entity: 'admins',

    },

    }
};
