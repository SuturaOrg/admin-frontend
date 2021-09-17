import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SmartTableData} from '../@core/data/smart-table';
import {CustomDataServerSource} from './CustomDataServerSource';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TableEventService {
  settings;
  entity;
  baseApi = 'http://localhost:8082/api/';

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

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {

      const data = event.newData;
      this.apiService.patchFromId(this.entity, event.newData.id, data).subscribe(
        async res => {
          console.log(event.data);
          event.confirm.resolve();
          //this.source.refresh();
          // await this.source.update(event.data,res);
        },
        this.handleError);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create?')) {

      const data = event.newData;
      this.apiService.post(this.entity, data).subscribe(
        async res => {
          console.log(res);
       //   await this.source.add(res);
          // await this.source.find(res);
          event.confirm.resolve();

        },
        this.handleError);

    } else {
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
    if (window.confirm('Are you sure you want to mouve to trash?')) {
      if(['contributions','refunds'].includes(this.entity) && !data.approved){
         this.apiService.patchFromId(this.entity,data.id,{status:true}).subscribe((res)=>alert("Déplacé dans la corbeille"),(error)=>alert("N'a pas été bien terminé"+error.message))
      } else if (this.entity=="loans" && data.status=="NEW"){
         this.apiService.patchFromId(this.entity,data.id,{status:"SUPPRIME"}).subscribe((res)=>alert("Déplacé dans la corbeille"),()=>alert("N'a pas été bien terminé"))
        }
      else {
        this.apiService.deleteFromId(this.entity, event.data.id).subscribe(
          async data => {
            //await this.source.remove(event.data);
            event.confirm.resolve();
            // await this.source.reset();
          },
          this.handleError);
      }
    } else {
      event.confirm.reject();
    }
  }

  /* this.source.getElements().then(els=>{
     //els.map(el=>{el.firstname="fd"});
     // event.close();
      this.source.load(els);
    });

    */
}
