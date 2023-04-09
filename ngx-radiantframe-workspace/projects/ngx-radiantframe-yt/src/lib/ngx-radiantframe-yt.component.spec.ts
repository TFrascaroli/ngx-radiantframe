import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxRadiantframeYtComponent } from './ngx-radiantframe-yt.component';
import { NgxRadiantframeYtModule } from './ngx-radiantframe-yt.module';
import { UiMode } from './ui-mode.enum';

describe('NgxRadiantframeYtComponent', () => {
  let component: NgxRadiantframeYtComponent;
  let fixture: ComponentFixture<NgxRadiantframeYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRadiantframeYtModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRadiantframeYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate iframe URL from video ID', () => {
    component.source = 'dQw4w9WgXcQ';
    component.uiMode = UiMode.NONE;
    component.processSource();

    expect(component.videoUrl).toContain('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('should generate iframe URL from full YouTube URL', () => {
    component.source = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    component.uiMode = UiMode.NONE;
    component.processSource();

    expect(component.videoUrl).toContain('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('should include modestbranding query param based on uiMode input', () => {
    component.source = 'dQw4w9WgXcQ';
    component.uiMode = UiMode.FULL;
    component.processSource();

    expect(component.videoUrl).toContain('modestbranding=0');

    component.uiMode = UiMode.NONE;
    component.processSource();

    expect(component.videoUrl).toContain('modestbranding=1');
  });
});
