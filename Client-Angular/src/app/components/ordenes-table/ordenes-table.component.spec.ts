import { CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDENES_MOCK } from '../../mocks/ordenes.mocks';
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

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada orden', () => {
    component.ordenes = ORDENES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.ordenes.length);
  });

  it('debería mostrar los datos de la orden en cada columna', () => {
    component.ordenes = ORDENES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const orden = component.ordenes[index];
      const orderDate = new DatePipe('en-US').transform(orden.orderDate);
      const totalAmount = new CurrencyPipe('en-US').transform(orden.totalAmount);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(orden.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(orden.customerName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(orderDate);
      expect(columns[3].nativeElement.textContent.trim()).toBe(totalAmount);
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.categoryMap['Pendiente']).toBe('warning');
    expect(component.categoryMap['En Proceso']).toBe('primary');
    expect(component.categoryMap['Completada']).toBe('success');
    expect(component.categoryMap['Cancelada']).toBe('danger');
  });
});
