import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTableComponent } from './ordenes-table.component';

describe('OrdenesTableComponent', () => {
  let component: OrdenesTableComponent;
  let fixture: ComponentFixture<OrdenesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
