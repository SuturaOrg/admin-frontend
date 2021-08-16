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
    firstName: {
          title: 'Firstname',
      },
      lastName: {
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
                firstName: {
                    title: 'Firstname',
                },
                lastName: {
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
                firstName: {
                 title: 'Firstname',
                 },
                 lastName: {
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
                firstName: {
                 title: 'Firstname',
                 },
                 lastName: {
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
                    firstName: {
                     title: 'Firstname',
                     },
                     lastName: {
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
                ExpirationDate: {
                    title: 'Expiration',
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
               firstName: {
                         title: 'Firstname',
                     },
                     lastName: {
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
                    firstName: {
                        title: 'Firstname',
                    },
                    lastName: {
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
            },
            entity: 'contributions',

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
                     firstName: {
                        title: 'Firstname',
                    },
                    lastName: {
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
            },
            entity: 'contributions',

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
                  firstName: {
                      title: 'Firstname',
                  },
                  lastName: {
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
          },
          entity: 'studentPrimes',
      }},

}
