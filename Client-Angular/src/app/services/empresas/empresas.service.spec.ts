import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Empresa } from '../../interfaces/empresas.interface';
import { EMPRESAS_MOCK } from '../../mocks/empresas.mocks';
import { EmpresasService } from './empresas.service';

describe('EmpresasService', () => {
  let service: EmpresasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(EmpresasService);
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

  describe('getAllEmpresas', () => {
    it('debería realizar una petición GET y retornar una lista de empresas', () => {
      const countEmpresas = 5;
      const mockEmpresas: Empresa[] = EMPRESAS_MOCK;

      service.getAllEmpresas(countEmpresas).subscribe((empresas) => {
        expect(empresas).toEqual(mockEmpresas);
        expect(empresas.length).toBe(mockEmpresas.length);
      });

      const req = httpMock.expectOne(`api/empresas/${countEmpresas}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockEmpresas);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countEmpresas = 3;

      service.getAllEmpresas(countEmpresas).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/empresas/${countEmpresas}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  });

});
import { TestBed } from '@angular/core/testing';

import { EmpresasService } from './empresas.service';

describe('EmpresasService', () => {
  let service: EmpresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
