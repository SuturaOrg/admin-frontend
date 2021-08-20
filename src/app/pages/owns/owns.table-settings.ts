export const ownsTableSettings = {
  contributions: {
  settings: {
    add: {
      addButtonContent:  '<i class="nb-plus"></i>',
        createButtonContent:  '<i class="nb-checkmark"></i>',
        cancelButtonContent:  '<i class="nb-close"></i>',
        confirmCreate:  true,
    },
    edit: {
      editButtonContent:  '<i class="nb-edit"></i>',
        saveButtonContent:  '<i class="nb-checkmark"></i>',
        cancelButtonContent:  '<i class="nb-close"></i>',
        confirmSave:  true,

    },
    delete: {
      deleteButtonContent:  '<i class="nb-trash"></i>',
        confirmDelete:  true,
    },
    columns: {
    firstname: {
          title: 'Firstname',
      },
      lastname: {
          title: 'Lastname',
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
      date: {
          title: 'Date',
          filter: true,
      },
      expiration: {
          title: 'Expiration date',
          filter: true,
      },
    },
  },
  entity:  'contributions',

},
   loans: {chosen: {
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
                firstname: {
                    title: 'Firstname',
                },
                lastname: {
                    title: 'Lastname',
                    filter: true,
                },
                amount: {
                    title: 'amount',
                    filter: true,
                    editable: false,
                },
                date: {
                    title: 'date',
                    filter: true,
                    editable: false,
                },
                priority: {
                    title: 'Priority',
                },
                RIB: {
                    title: 'RIB',
                },
                phone: {
                    title: 'Phone',
                  },
            },
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
                     filter: true,
                 },
                 amount: {
                     title: 'amount',
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
                     filter: true,
                 },
                 amount: {
                     title: 'amount',
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
          joints: [
            {
              entity: 'studentPrime',
              columns: ['firstname', 'lastname'],
            },
          ],
        },
        entity: 'loans',
    },
    others: {
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
                    firstname: {
                     title: 'Firstname',
                     },
                     lastname: {
                         title: 'Lastname',
                         filter: true,
                     },
                     amount: {
                         title: 'amount',
                         filter: true,
                         editable: false,
                     },
                     date: {
                         title: 'date',
                         filter: true,
                         editable: false,
                     },
                     status: {
                         title: 'status',
                     },
                     priority: {
                         title: 'priority',
                     },
                     reason: {
                         title: 'reason',
                     },
                     comment: {
                         title: 'comment',
                     },
                     phone: {
                         title: 'Phone',
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
        }},
    parameters: {
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
               firstname: {
                         title: 'Firstname',
                     },
                     lastname: {
                         title: 'Lastname',
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
                     date: {
                          title: 'date',
                          filter: true,
                     },
                     type: {
                         title: 'Type',
                         filter: true,
                     },
            },
        },
        entity: 'refunds',

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
                },
                threshold: {
                    title: 'Threshold',
                },
                amountFund: {
                    title: 'Amount Fund',
                    filter: true,
                },
                currentAmount: {
                    title: 'CurrentAmount',
                    filter: true,
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
                         date: {
                              title: 'date',
                              filter: true,
                         },
                },
            },
            entity: 'donations',

        },

    adherents: {contributed: {
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
                    firstname: {
                        title: 'Firstname',
                    },
                    lastname: {
                        title: 'Lastname',
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
                        filter: true,
                    },
                    totalPeriods: {
                        title: 'Total periods',
                        filter: true,
                    },
                },
              pager: {
                display: true,
                perPage: 5,
              },
              superClass: true,
              classChildren: [ 'admins', 'students'],
              filters: [
                {
                  contribution: [],
                },
              ],
              joints: [
                {
                  entity: 'contributions',
                  isCollection: true,
                  columns: ['totalAmount', 'amount'],
                },
              ],
            },
            entity: 'studentPrimes',

        },
        notContributed: {
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
                     firstname: {
                        title: 'Firstname',
                    },
                    lastname: {
                        title: 'Lastname',
                    },
                    town: {
                        title: 'Town',
                        filter: true,
                        editable: false,
                    },
                    totalAmount: {
                        title: 'Total amount',
                        filter: true,
                    },
                    totalPeriods: {
                        title: 'Total periods',
                        filter: true,
                    },
                },
              superClass: true,
              classChildren: [ 'admins', 'students'],
            },
            entity: 'studentPrimes',

        },
      all: {
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
            superClass: true,
            classChildren: [ 'admins', 'students'],
          },
          entity: 'studentPrimes',
      }},

};
