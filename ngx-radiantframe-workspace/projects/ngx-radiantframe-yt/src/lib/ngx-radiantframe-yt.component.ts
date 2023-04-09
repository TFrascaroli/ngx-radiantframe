import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxRadiantframeYtService } from './ngx-radiantframe-yt.service';
import { UiMode } from './ui-mode.enum';

@Component({
  selector: 'ngx-radiantframe-yt',
  template: `
    <iframe [src]="videoUrl" [width]="width" [height]="height" frameborder="0" allowfullscreen></iframe>
  `,
})
export class NgxRadiantframeYtComponent implements OnInit {
  @Input() width: string | number = '640';
  @Input() height: string | number = '480';
  @Input() uiMode: UiMode = UiMode.FULL;

  private _source: string = "";

  @Input()
  set source(value: string) {
    this._source = value;
    this.processSource();
  }

  get source(): string {
    return this._source;
  }

  videoUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private radiantframeYtService: NgxRadiantframeYtService) {}

  ngOnInit(): void {
    this.processSource();
  }

  processSource(): void {
    if (!this.source) {
      return;
    }

    const videoId = this.radiantframeYtService.extractVideoId(this.source);
    const baseUrl = 'https://www.youtube.com/embed/';
    const queryParams = `?rel=0&modestbranding=${this.uiMode === UiMode.NONE ? 1 : 0}`;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}${videoId}${queryParams}`);
  }
}
