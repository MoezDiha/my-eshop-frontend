import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProduitsComponent } from './show-all-produits.component';

describe('ShowAllProduitsComponent', () => {
  let component: ShowAllProduitsComponent;
  let fixture: ComponentFixture<ShowAllProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
