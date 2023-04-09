import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxRadiantframeComponent } from './ngx-radiantframe.component';
import { NgxRadiantframeYtModule } from '../../../ngx-radiantframe-yt/src/lib/ngx-radiantframe-yt.module';

@NgModule({
  declarations: [NgxRadiantframeComponent],
  imports: [
    CommonModule,
    NgxRadiantframeYtModule,
  ],
  exports: [NgxRadiantframeComponent]
})
export class NgxRadiantframeModule { }
