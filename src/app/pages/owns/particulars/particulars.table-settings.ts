type pathsType= 'chosen'|'finished'| 'refunded';
type pathsMap = { [path in pathsType]: Object };
export const particularsTableSettings: pathsMap = {
    chosen: {
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
        entity: 'students',

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
        entity: 'students',

    },
};
