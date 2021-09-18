import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {DefaultEditor} from 'ng2-smart-table';
import {ApiService} from '../../../services/api.service';

@Component({
  template: `
    File: <input [ngClass]="inputClass"
                 #file
                 class="form-control short-input"
                 type="file"
                 [name]="cell.getId()"
                 [disabled]="!cell.isEditable()"
                 [placeholder]="cell.getTitle()"
                 (click)="onClick.emit($event)"
                 (change)="updateValue($event)"
                 (keydown.enter)="onEdited.emit($event)"
                 (keydown.esc)="onStopEditing.emit()">
  `,
})
export class ImageUploadComponent extends DefaultEditor implements AfterViewInit {

  constructor(private apiService: ApiService) {
    super();
  }

  @ViewChild('file') file: ElementRef;


  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      // this.url.nativeElement.value = this.getUrlHref();
    }
  }

  updateValue(event) {
    const image = (event.target as HTMLInputElement).files[0];
    this.apiService.upload('donation', image).subscribe((res) => {
      const imageUrl = res.url;
      this.cell.newValue = imageUrl;
    });
  }

}
