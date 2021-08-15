import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBoxComponent } from './listing-box.component';

describe('ListingBoxComponent', () => {
  let component: ListingBoxComponent;
  let fixture: ComponentFixture<ListingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
