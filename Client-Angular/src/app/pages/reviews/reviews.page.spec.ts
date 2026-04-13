import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { ReviewsPage } from './reviews.page';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { ReviewsTableComponent } from '../../components/reviews-table/reviews-table.component';
import { REVIEWS_MOCK } from '../../mocks/reviews.mocks';

describe('ReviewsPage', () => {
  let component: ReviewsPage;
  let fixture: ComponentFixture<ReviewsPage>;
  let reviewsService: ReviewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsPage, ReviewsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPage);
    component = fixture.componentInstance;
    reviewsService = TestBed.inject(ReviewsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllReviews al iniciar', () => {
    const spyGetAllReviews = jest.spyOn(reviewsService, 'getAllReviews').mockReturnValue(of(REVIEWS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllReviews).toHaveBeenCalled();
  });

  it('debería asignar las reseñas recibidas del servicio', () => {
    jest.spyOn(reviewsService, 'getAllReviews').mockReturnValue(of(REVIEWS_MOCK));
    fixture.detectChanges();
    expect(component.reviews).toEqual(REVIEWS_MOCK);
  });

  it('debería pasar las reseñas al componente reviews-table', () => {
    jest.spyOn(reviewsService, 'getAllReviews').mockReturnValue(of(REVIEWS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ReviewsTableComponent))
      .componentInstance;
    expect(tableComponent.reviews).toEqual(REVIEWS_MOCK);
  });

  it('debería manejar el error cuando falla getAllReviews', () => {
    component.reviews = [];
    const errorResponse = new Error('Error al cargar reseñas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(reviewsService, 'getAllReviews').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(reviewsService.getAllReviews).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.reviews.length).toBe(0);
  });
});
