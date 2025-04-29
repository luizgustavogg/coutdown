import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingVideoComponent } from './lading-video.component';

describe('LadingVideoComponent', () => {
  let component: LadingVideoComponent;
  let fixture: ComponentFixture<LadingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadingVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
