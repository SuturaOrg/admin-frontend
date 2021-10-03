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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Montant',
            filter: true,
          },
          period: {
            title: 'Période',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          expiration: {
            title: 'Date d\'expiration',
            filter: true,
            editable: false,
          },
          proof: {
            title: 'Preuve',
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          period: {
            title: 'Période',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          expiration: {
            title: 'Date d\'expiration',
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false
          },
          amount: {
            title: 'Montant',
            editable: false,
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          priority: {
            title: 'Priorité',
            filter: true,
            editable: false,
          },
          RIB: {
            title: 'RIB',
          },
          phone: {
            title: 'Téléphone',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.phone;
              }
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          amountRefund: {
            title: 'Montant remboursé',
            editable: false
          },
          sliceCount: {
            title: 'Tranches',
            editable: false
          },
          phone: {
            title: 'Téléphone',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.phone;
              }
          },
          statusRefund: {
            title: 'Refunded',
            editable: false
          },
          receipt: {
            title: 'Receipt',
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Montant',
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          comment: {
            title: 'Comment',
            editable: false,
          },
          phone: {
            title: 'Téléphone',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.phone;
              }
          },
          proof: {
            title: 'Preuve',
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            }
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            }
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          amountRefund: {
            title: 'Montant remboursé',
          },
          sliceCount: {
            title: 'Tranches',
          },
          phone: {
            title: 'Téléphone',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.phone;
              }
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
            title: 'Prénom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.firstname;
            },
            editable: false,
          },
          lastname: {
            title: 'Nom',
            valuePrepareFunction: (val, row) => {
              return row.studentPrime.lastname;
            },
            editable: false,
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          status: {
            title: 'Etat',
            editable: false,
          },
          priority: {
            title: 'Priorité',
            editable: false,
          },
          reason: {
            title: 'Raison',
            editable: false,
          },
          phone: {
            title: 'Téléphone',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.phone;
              }
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
          title: 'Période',
        },
        expiration: {
          title: 'Expiration',
        },
        updatedAt: {
          title: 'Modifié le',
          valuePrepareFunction: (updatedAt) => {
            return new Date(updatedAt).toLocaleDateString('fr-FR');
          },
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
          title: 'Prénom',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.firstname;
          },
          editable: false,
        },
        lastname: {
          title: 'Nom',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.lastname;
          },
          editable: false,
        },
        amount: {
          title: 'Montant',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Période',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'Date',
          valuePrepareFunction: (createdAt) => {
            return new Date(createdAt).toLocaleDateString('fr-FR');
          },
          filter: true,
          editable: false,
        },
        proof: {
          title: 'Preuve',
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
          title: 'Prénom',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.firstname;
          },
          editable: false,
        },
        lastname: {
          title: 'Nom',
          valuePrepareFunction: (val, row) => {
            return row.studentPrime.lastname;
          },
          editable: false,
        },
        amount: {
          title: 'Montant',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Période',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'Date',
          valuePrepareFunction: (createdAt) => {
            return new Date(createdAt).toLocaleDateString('fr-FR');
          },
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
          title: 'Seuil',
          editable: false,
        },
        amountFund: {
          title: 'Montant Caisse',
          filter: true,
          editable: false,
        },
        currentAmount: {
          title: 'CurrentAmount',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Période',
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
          title: 'Contributeur',
          editable: false,
        },
        amount: {
          title: 'Montant',
          filter: true,
          editable: false,
        },
        period: {
          title: 'Période',
          filter: true,
          editable: false,
        },
        createdAt: {
          title: 'date',
          valuePrepareFunction: (createdAt) => {
            return new Date(createdAt).toLocaleDateString('fr-FR');
          },
          filter: true,
          editable: false,
        },
        proof: {
          title: 'Preuve',
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
            title: 'Montant',
            filter: true,
            editable: false,
          },
          createdBy: {
            title: 'Admin',
            editable: false,
          },
          period: {
            title: 'Période',
            filter: true,
            editable: false,
          },
          createdAt: {
            title: 'Date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
            filter: true,
            editable: false,
          },
          proof: {
            title: 'Preuve',
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
            title: 'Prénom',
            editable: false,
          },
          lastname: {
            title: 'Nom',
            editable: false,
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Ville',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Montant total',
            editable: false,
          },
          totalPeriods: {
            title: 'Nombre de périodes',
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
            title: 'Prénom',
            editable: false,
          },
          lastname: {
            title: 'Nom',
            editable: false,
          },
          town: {
            title: 'Ville',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Montant total',
            filter: true,
            editable: false,
          },
          totalPeriods: {
            title: 'Nombre de périodes',
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
                title: 'Prénom',
                editable: false,
              },
              lastname: {
                title: 'Nom',
                editable: false,
              },
              position: {
                title: 'Rôle',
                editable: false,
              },
              amount: {
                title: 'Montant',
                filter: true,
                editable: false,
              },
              town: {
                title: 'Ville',
                filter: true,
                editable: false,
              },
              totalAmount: {
                title: 'Montant total',
                editable: false,
              },
              totalPeriods: {
                title: 'Nombre de périodes',
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
            title: 'Prénom',
          },
          lastname: {
            title: 'Nom',
          },
          totalPeriods: {
            title: 'Duration',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Ville',
            filter: true,
          },
          phone: {
            title: 'Téléphone',
            filter: true,
          },
          email: {
            title: 'Email',
            filter: true,
          },
          faculty: {
            title: 'Filière d\'études',
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
              title: 'Prénom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.firstname;
              }
            },
            lastname: {
              title: 'Nom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              }
            },
            amount: {
              title: 'Montant',
              filter: true,
              editable: false,
            },
            createdAt: {
              title: 'Date',
              valuePrepareFunction: (createdAt) => {
                return new Date(createdAt).toLocaleDateString('fr-FR');
              },
              filter: true,
              editable: false,
            },
            priority: {
              title: 'Priorité',
            },
            reason: {
              title: 'Raison',
            },
            phone: {
              title: 'Téléphone',
                valuePrepareFunction: (val, row) => {
                  return row.studentPrime.phone;
                }
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
              title: 'Prénom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.firstname;
              },
              editable: false,
            },
            lastname: {
              title: 'Nom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              },
              editable: false,
            },
            amount: {
              title: 'Montant',
              filter: true,
              editable: false,
            },
            period: {
              title: 'Période',
              filter: true,
              editable: false,
            },
            createdAt: {
              title: 'Date',
              valuePrepareFunction: (createdAt) => {
                return new Date(createdAt).toLocaleDateString('fr-FR');
              },
              filter: true,
              editable: false,
            },
            expiration: {
              title: 'Date d\'expiration',
              filter: true,
              editable: false,
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
              title: 'Prénom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.firstname;
              }
            },
            lastname: {
              title: 'Nom',
              valuePrepareFunction: (val, row) => {
                return row.studentPrime.lastname;
              }
            },
            amount: {
              title: 'Montant',
              filter: true,
              editable: false,
            },
            period: {
              title: 'Période',
              filter: true,
            },
            createdAt: {
              title: 'Date',
              valuePrepareFunction: (createdAt) => {
                return new Date(createdAt).toLocaleDateString('fr-FR');
              },
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
            title: 'Contributeur',
          },
          admin: {
            title: 'Admin',
          },
          amount: {
            title: 'Montant',
            filter: true,
            editable: false,
          },
          period: {
            title: 'Période',
            filter: true,
          },
          createdAt: {
            title: 'date',
            valuePrepareFunction: (createdAt) => {
              return new Date(createdAt).toLocaleDateString('fr-FR');
            },
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
            title: 'Prénom',
          },
          lastname: {
            title: 'Nom',
          },
          totalPeriods: {
            title: 'Duration',
            filter: true,
            editable: false,
          },
          town: {
            title: 'Ville',
            filter: true,
          },
          phone: {
            title: 'Téléphone',
            filter: true,
          },
          email: {
            title: 'Email',
            filter: true,
          },
          faculty: {
            title: 'Filière d\'études',
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
            title: 'Prénom',
          },
          lastname: {
            title: 'Nom',
          },
          position: {
            title: 'Rôle',
          },
          amount: {
            title: 'Montant',
            filter: true,
          },
          town: {
            title: 'Ville',
            filter: true,
            editable: false,
          },
          totalAmount: {
            title: 'Montant total',
          },
          totalPeriods: {
            title: 'Nombre de périodes',
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
