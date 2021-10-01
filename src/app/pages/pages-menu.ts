import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Accueil',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  /*{
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },*/
  {
    title: 'ENTITES',
    group: true,
  },
  { title: 'Prêts',
    icon: 'shake-outline',
    children: [
      {
        title: 'ELUS',
        icon: 'clock-outline',
        link: '/pages/owns/loans/chosen',
      },
      {
        title: 'TERMINES',
        icon: 'done-all-outline',
        link: '/pages/owns/loans/finished',
      },
      {
        title: 'REMBOURSES',
        link: '/pages/owns/loans/refunded',
        icon: 'repeat-outline',
      },
      {
        title: 'En attente',
        link: '/pages/owns/loans/pending',
        icon: 'repeat-outline',
      },
      {
        title: 'Tout',
        link: '/pages/owns/loans/all',
        icon: 'list-outline',
      },
    ],
  },
  { title: 'Adhérents',
  icon: 'person-outline',
  children: [
    {
      title: 'ayant cotisé',
      link: '/pages/owns/adherents/contributed',
      icon: 'person-done-outline',
    },
    {
      title: 'n\'ayant pas cotisé ',
      link: '/pages/owns/adherents/notContributed',
      icon: 'person-delete-outline',
    },
    {
      title: 'Etudiants',
      link: '/pages/owns/adherents/students',
      icon: 'people-outline',
    },
    {
      title: 'Administrateurs',
      link: '/pages/owns/adherents/administrators',
      icon: 'people-outline',
    },
  ],
},
{
  title: 'Cotisations',
  icon: 'layers-outline',
  children: [
      {
        title: 'En attente',
        link: '/pages/owns/contributions/pending',
        icon: 'people-outline',
      },
      {
        title: 'Tout',
        link: '/pages/owns/contributions/all',
        icon: 'people-outline',
      },
    ],
},

{
  title: 'Remboursements',
  icon: 'repeat-outline',
  children: [
        {
          title: 'En attente',
          link: '/pages/owns/refunds/pending',
          icon: 'people-outline',
        },
        {
          title: 'Tout',
          link: '/pages/owns/refunds/all',
          icon: 'people-outline',
        },
      ],
},
{
  title: 'Dépenses',
  icon: 'shopping-cart-outline',
  link: '/pages/owns/expenses',
},
{
  title: 'Dons',
  icon: 'gift-outline',
  link: '/pages/owns/donations',
},
{
  title: 'Caisses',
  icon: 'cube-outline',
  link: '/pages/owns/funds',
},
{
  title: 'Paramètres',
  icon: 'settings-outline',
  link: '/pages/owns/parameters',
},
{
  title: 'AUTRES',
  group: true,
},
 {
  title: 'Corbeille',
  icon: 'trash-2-outline',
  children: [
      {
        title: 'Prêts',
        link: '/pages/owns/trash/loans',
        icon: 'shake-outline',
      },
      {
        title: 'Cotisations',
        link: '/pages/owns/trash/contributions',
        icon: 'layers-outline',
      },
      {
        title: 'Remboursements',
        link: '/pages/owns/trash/refunds',
        icon: 'repeat-outline',
      },
      {
        title: 'Dons',
        link: '/pages/owns/trash/donations',
        icon: 'gift-outline',
      },
      {
        title: 'Etudiants',
        link: '/pages/owns/trash/students',
        icon: 'people-outline',
      },
      {
        title: 'Administrateurs',
        link: '/pages/owns/trash/administrators',
        icon: 'people-outline',
      },
    ],
},
{
  title: 'USER',
  group: true,
  hidden: true,
}, {
  title: 'Profile',
  icon: 'person-outline',
  link: '/pages/profile',
  hidden: true,
},

  {
    title: 'FEATURES',
    group: false,
    hidden: true,
  },
  /*{
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },*/
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Se connecter',
        link: '/auth/login',
      },
      {
        title: 'S\'inscrire',
        link: '/auth/register',
      },/*
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },*/
    ],
  },
];
