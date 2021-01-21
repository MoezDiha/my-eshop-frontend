import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCategorieComponent } from './show-all-categorie.component';

describe('ShowAllCategorieComponent', () => {
  let component: ShowAllCategorieComponent;
  let fixture: ComponentFixture<ShowAllCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
