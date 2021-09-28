import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SmartTableData} from '../@core/data/smart-table';
import {CustomDataServerSource} from './CustomDataServerSource';
import {ApiService} from './api.service';
import config from '../../config';

@Injectable({
  providedIn: 'root',
})
export class TableEventService {
  settings;
  entity;
  baseApi = `${config.apiUrl}`;

  source: CustomDataServerSource;


  constructor(private service: SmartTableData, private apiService: ApiService) {
  }

  loadEntity(entity, settings) {
    console.log("loading");
    this.entity = entity;
    this.source = this.apiService.getCustomDataServerSource(this.entity, settings);
    if (settings.autofilter && settings.autofilter.length) {
      const filterConf = [];
      for (const filter of settings.autofilter) {
      filterConf.push(
        {
          field: filter.column, search: filter.value,
        }
      );
      }
      this.source.setFilter(filterConf);
    }
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

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {

      const data = event.newData;
      this.apiService.post(this.entity, data).subscribe(
        async res => {
          console.log(res);
          alert("Créé avec succès");
       //   await this.source.add(res);
          // await this.source.find(res);
          event.confirm.resolve();

        },
        this.handleError,);

    } else {
      alert("Une erreur est survenue dans la création"),
      event.confirm.reject();
    }
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log('Client-side error occured.', err);
    } else {
      console.log('Server-side error occured.', err);
    }

  }

  onDeleteConfirm(event): void {
        const data = event.data;
        let action;
            if(['contributions','refunds'].includes(this.entity) && !data.approved && !data.status){
              action={status:true}
            }
            else if (this.entity=="loans" && data.status=="NEW"){
                action={status:"SUPPRIME"}
              }
            else if (this.entity=="students" || this.entity=="admins"){
                  action={enabled:false}
              }
            else if (['contributions','refunds'].includes(this.entity) && !data.approved && data.status){
                    action=0;
            }
            else if (this.entity=="loans" && data.status=="SUPPRIME"){
                      action=0;
            }
            if(action!=0){
              if (window.confirm('Are you sure you want to move to trash?')) {
                this.apiService.patchFromId(this.entity,data.id,action).subscribe((res)=>alert("Déplacé dans la corbeille"),()=>alert("N'a pas été déplacé"))
                this.source.refresh();
                this.source.refresh();
              }
              else {
               event.confirm.reject();
              }
            } else{
            if (window.confirm('Are you sure you want to drop to trash?')) {
              this.apiService.deleteFromId(this.entity, event.data.id).subscribe(
              async data => {
                //await this.source.remove(event.data);
                event.confirm.resolve();
                // await this.source.reset();
              },
              this.handleError);
              this.source.refresh();
              this.source.refresh();
            }
            else {
               event.confirm.reject();
            }
        }
    }

  onEditConfirm(event): void {
    const data = event.data;
        if (window.confirm('Are you sure you want to save?')) {
          this.apiService.patchFromId(this.entity, event.data.id, data).subscribe(
            async res => {
              console.log(event.data);
              event.confirm.resolve();
              await this.source.update(event.data,res);
              this.source.refresh();
              this.source.refresh();
            },
            this.handleError);
        } else {
          event.confirm.reject();
        }
      }
}
