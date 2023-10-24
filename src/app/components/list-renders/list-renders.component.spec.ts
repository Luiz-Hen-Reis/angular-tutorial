import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendersComponent } from './list-renders.component';

describe('ListRendersComponent', () => {
  let component: ListRendersComponent;
  let fixture: ComponentFixture<ListRendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRendersComponent]
    });
    fixture = TestBed.createComponent(ListRendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
