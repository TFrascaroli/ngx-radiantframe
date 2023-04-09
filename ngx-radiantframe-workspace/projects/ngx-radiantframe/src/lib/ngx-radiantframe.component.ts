import { Component, Input } from '@angular/core';
import { MediaProvider } from './media-provider.enum';

@Component({
  selector: 'ngx-radiantframe',
  template: `
    <ng-container [ngSwitch]="provider">
      <ngx-radiantframe-yt *ngSwitchCase="'YOUTUBE'" [source]="source" [width]="width" [height]="height"></ngx-radiantframe-yt>
      <!-- Add more cases for other providers here -->
    </ng-container>
  `,
})
export class NgxRadiantframeComponent {
  @Input() width: string | number = '640';
  @Input() height: string | number = '480';
  @Input() source: string = "";
  @Input() provider: MediaProvider = MediaProvider.NONE;
}
