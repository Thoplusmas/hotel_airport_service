import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilistTableComponent } from './apilist-table.component';

describe('ApilistTableComponent', () => {
  let component: ApilistTableComponent;
  let fixture: ComponentFixture<ApilistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApilistTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
