import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRadiantframeComponent } from './ngx-radiantframe.component';

describe('NgxRadiantframeComponent', () => {
  let component: NgxRadiantframeComponent;
  let fixture: ComponentFixture<NgxRadiantframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRadiantframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRadiantframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
