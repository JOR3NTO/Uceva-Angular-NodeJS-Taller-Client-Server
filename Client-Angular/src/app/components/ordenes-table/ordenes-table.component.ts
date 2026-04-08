import { Component, Input } from '@angular/core';
import { Orden, OrderStatus } from '../../interfaces/ordenes.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CommonModule } from '@angular/common';

/**
 * Componente que renderiza una tabla con las órdenes proporcionadas.
 *
 * Muestra columnas básicas de la orden (id, cliente, fecha, total y estado)
 * y utiliza `BadgeAtom` para representar visualmente el estado de la orden.
 *
 * @remarks
 * Este componente recibe las órdenes desde un componente padre mediante
 * el Input `ordenes` y usa `categoryMap` para asignar estilos a cada estado.
 *
 * @example
 * ```html
 * <app-ordenes-table [ordenes]="ordenesList"></app-ordenes-table>
 * ```
 */
@Component({
  selector: 'app-ordenes-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './ordenes-table.component.html',
})
export class OrdenesTableComponent {

  /**
   * Lista de órdenes a mostrar en la tabla.
   */
  @Input() ordenes: Orden[] = [];

  /**
   * Mapa para convertir `OrderStatus` en el tipo de `Badge` visual.
   */
  categoryMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'En Proceso': 'primary',
    'Completada': 'success',
    'Cancelada': 'danger',
  }

}
