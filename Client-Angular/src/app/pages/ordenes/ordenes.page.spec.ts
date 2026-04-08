import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesPage } from './ordenes.page';
import { provideHttpClient } from '@angular/common/http';
import { OrdenesService } from '../../services/ordenes/ordenes.service';
import { OrdenesTableComponent } from '../../components/ordenes-table/ordenes-table.component';
import { of, throwError } from 'rxjs';
import { ORDENES_MOCK } from '../../mocks/ordenes.mocks';
import { By } from '@angular/platform-browser';

describe('OrdenesPage', () => {
  let component: OrdenesPage;
  let fixture: ComponentFixture<OrdenesPage>;
  let ordenesService: OrdenesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesPage, OrdenesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesPage);
    component = fixture.componentInstance;
    ordenesService = TestBed.inject(OrdenesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrdenes al iniciar', () => {
    const spyGetAll = jest.spyOn(ordenesService, 'getAllOrdenes').mockReturnValue(of(ORDENES_MOCK));
    fixture.detectChanges();
    expect(spyGetAll).toHaveBeenCalled();
  });

  it('debería asignar las órdenes recibidas del servicio', () => {
    jest.spyOn(ordenesService, 'getAllOrdenes').mockReturnValue(of(ORDENES_MOCK));
    fixture.detectChanges();
    expect(component.ordenes).toEqual(ORDENES_MOCK);
  });

  it('debería pasar las órdenes al componente ordenes-table', () => {
    jest.spyOn(ordenesService, 'getAllOrdenes').mockReturnValue(of(ORDENES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(OrdenesTableComponent))
      .componentInstance;
    expect(tableComponent.ordenes).toEqual(ORDENES_MOCK);
  });

  it('debería manejar el error cuando falla getAllOrdenes', () => {
    component.ordenes = [];
    const errorResponse = new Error('Error al cargar órdenes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ordenesService, 'getAllOrdenes').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordenesService.getAllOrdenes).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.ordenes.length).toBe(0);
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesPage } from './ordenes.page';

describe('OrdenesPage', () => {
  let component: OrdenesPage;
  let fixture: ComponentFixture<OrdenesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
