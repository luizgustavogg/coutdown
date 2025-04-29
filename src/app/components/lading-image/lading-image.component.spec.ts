import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingImageComponent } from './lading-image.component';

describe('LadingImageComponent', () => {
  let component: LadingImageComponent;
  let fixture: ComponentFixture<LadingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadingImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
