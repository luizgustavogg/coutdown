import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselImagensComponent } from './carrosel-imagens.component';

describe('CarroselImagensComponent', () => {
  let component: CarroselImagensComponent;
  let fixture: ComponentFixture<CarroselImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselImagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
