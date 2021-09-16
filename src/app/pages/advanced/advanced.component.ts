import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomDataServerSource} from '../../services/CustomDataServerSource';
import {TableEventService} from '../../services/tableEvent.service';
import {defaultTableSettings} from './advanced.table-settings';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {DialogNamePromptComponent} from '../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ngx-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit, OnDestroy {
  defaultSettings = defaultTableSettings;
  @Input()
  data: { settings: Object, entity: string } | null;
  title;
  source: CustomDataServerSource;
  headers: HttpHeaders;
  sub;
  onEditConfirm: (event) => void;
  onCreateConfirm: (event) => void;
  onDeleteConfirm: (event) => void;
  private dialogRef2: NbDialogRef<any>;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private tableEventService: TableEventService,
              private dialogService: NbDialogService) {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzQ5IiwiaWF0IjoxNjI4MjMxODc0LCJleHAiOjE2Mjg4MzY2NzR9.TuIp6dIT4wKWDl9t4cZTP6cFLEvMlFFV_f90XdL_BNtxR-52deLOah9Jx0B1-zCj2Abvp2cCT1--iF8xWjOcQw';
    this.headers = new HttpHeaders({'Authorization': 'Bearer ' + token}); // create header object
  }

  ngOnInit() {
    // if not input
    if (!this.data) {
      this.route.data ? this.sub = this.route
        .data
        .subscribe(data => {
          console.log('GG', data);
          if (data.entity && data.settings) {
              this.data = {entity: data.entity, settings: data.settings};
              this.title =data.entity;


          }
          },
        ) : null;
    }
    this.data ? this.tableEventService.loadEntity(this.data.entity, this.data.settings) : null;
    this.source = this.tableEventService.source;
    this.onEditConfirm = this.tableEventService.onEditConfirm.bind(this.tableEventService);
    this.onCreateConfirm = this.tableEventService.onCreateConfirm.bind(this.tableEventService);
    this.onDeleteConfirm = this.tableEventService.onDeleteConfirm.bind(this.tableEventService);
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
  @ViewChild('dialog',{static:false}) dialog: TemplateRef<any>;
  onRowSelect(event): void {
    console.log('xx',event);
    this.dialogService.open(
      this.dialog,
      { context: event.data});
  }
  @ViewChild('dialog2',{static:false}) dialog2: TemplateRef<any>;
  approve(data): void {
    this.dialogRef2 =this.dialogService.open(this.dialog2);
}
  cancel() {
    this.dialogRef2.close();
  }

  submit(score) {
    this.dialogRef2.close();
  }
}
