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
    this.entity = entity;
    this.source = this.apiService.getCustomDataServerSource(this.entity, settings);
    if (settings.autofilter && settings.autofilter.length) {
      for (const filter of settings.autofilter) {
        this.source.addFilter({
          field: filter.column, search: filter.value,
        });
      }
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
    if (window.confirm('Are you sure you want to delete?')) {
      this.apiService.deleteFromId(this.entity, event.data.id).subscribe(
        async data => {
          console.log(data);
          //await this.source.remove(event.data);
          event.confirm.resolve();
          // await this.source.reset();
        },
        this.handleError);
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
