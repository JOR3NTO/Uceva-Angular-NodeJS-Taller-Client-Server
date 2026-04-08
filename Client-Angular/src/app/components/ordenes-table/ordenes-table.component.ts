import { Component, Input } from '@angular/core';
import { Orden, OrderStatus } from '../../interfaces/ordenes.interface';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordenes-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './ordenes-table.component.html',
})
export class OrdenesTableComponent {

  @Input() ordenes: Orden[] = [];

  categoryMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'En Proceso': 'primary',
    'Completada': 'success',
    'Cancelada': 'danger',
  }

}
