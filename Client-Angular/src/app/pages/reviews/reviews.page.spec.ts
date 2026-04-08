import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTablePage } from './reviews-table.page';

describe('ReviewsTablePage', () => {
  let component: ReviewsTablePage;
  let fixture: ComponentFixture<ReviewsTablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsTablePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
