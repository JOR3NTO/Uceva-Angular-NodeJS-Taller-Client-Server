import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Review } from '../../interfaces/reviews.interface';
import { REVIEWS_MOCK } from '../../mocks/reviews.mocks';
import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  let service: ReviewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ReviewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getAllReviews', () => {
    it('debería realizar una petición GET y retornar una lista de reseñas', () => {
      const countReviews = 5;
      const mockReviews: Review[] = REVIEWS_MOCK;

      service.getAllReviews(countReviews).subscribe((reviews) => {
        expect(reviews).toEqual(mockReviews);
        expect(reviews.length).toBe(mockReviews.length);
      });

      const req = httpMock.expectOne(`api/reviews/${countReviews}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockReviews);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countReviews = 3;

      service.getAllReviews(countReviews).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/reviews/${countReviews}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });

});

