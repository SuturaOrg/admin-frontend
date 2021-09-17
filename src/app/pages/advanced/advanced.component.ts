import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomDataServerSource} from '../../services/CustomDataServerSource';
import {TableEventService} from '../../services/tableEvent.service';
import {defaultTableSettings} from './advanced.table-settings';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {DialogNamePromptComponent} from '../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import {Subscription} from 'rxjs';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'ngx-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit, OnDestroy {
  defaultSettings = defaultTableSettings;
  @Input()
  data: { settings: Object, entity: string } | null;
  entity:string;
  title;
  source: CustomDataServerSource;
  sub;
  onEditConfirm: (event) => void;
  onCreateConfirm: (event) => void;
  onDeleteConfirm: (event) => void;
  private dialogRef2: NbDialogRef<any>;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private tableEventService: TableEventService,
              private apiService:ApiService,
              private dialogService: NbDialogService) {
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
              this.entity=this.title =data.entity;

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
   if( data.hasOwnProperty("scoreAdmin")){ this.dialogRef2 =this.dialogService.open(this.dialog2,{
      context:data
    });}
   else{
     this.apiService.patchFromId(this.entity,data.id,{approved:true}).subscribe((res)=>alert("Bien approuvé"),()=>alert("N'a pas été bien approuvé"))
   }
}
  finish(data): void {
    this.apiService.patchFromId(this.entity,data.id,{status:"FINISHED"}).subscribe((res)=>alert("Bien terminé"),()=>alert("N'a pas été bien terminé"))
  }
cancel() {
    this.dialogRef2.close();
  }

  submit(score, data) {
    if(score>10 || score<0){
      alert("Le score doit être compis entre 0 et 10");
      return
    }
    this.apiService.patchFromId(this.entity,data.id,{scoreAdmin:score, approved:true}).subscribe((res)=>{
    },
      console.log)
    this.dialogRef2.close();
  }

}
