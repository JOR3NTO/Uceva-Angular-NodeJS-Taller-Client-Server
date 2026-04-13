import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Orden } from '../../interfaces/ordenes.interface';
import { ORDENES_MOCK } from '../../mocks/ordenes.mocks';
import { OrdenesService } from './ordenes.service';

describe('OrdenesService', () => {
  let service: OrdenesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(OrdenesService);
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

  describe('getAllOrdenes', () => {
    it('debería realizar una petición GET y retornar una lista de órdenes', () => {
      const countOrdenes = 5;
      const mockOrdenes: Orden[] = ORDENES_MOCK;

      service.getAllOrdenes(countOrdenes).subscribe((ordenes) => {
        expect(ordenes).toEqual(mockOrdenes);
        expect(ordenes.length).toBe(mockOrdenes.length);
      });

      const req = httpMock.expectOne(`api/ordenes/${countOrdenes}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockOrdenes);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countOrdenes = 3;

      service.getAllOrdenes(countOrdenes).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/ordenes/${countOrdenes}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });

});
