import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxRadiantframeYtService {

  // Extracts the YouTube video ID from the given URL or returns the input if it's already a video ID
  extractVideoId(source: string): string {
    const url = new URL(source);
    if (url.host.includes('youtube.com')) {
      return <string>url.searchParams.get('v');
    } else if (url.host.includes('youtu.be')) {
      return url.pathname.substring(1);
    } else {
      return source;
    }
  }
}
