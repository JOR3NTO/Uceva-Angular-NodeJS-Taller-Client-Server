import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/reviews.interface';

/**
 * Componente que muestra una tabla/listado de reseñas.
 *
 * Este componente es utilizado en la página `ReviewsPage` para mostrar
 * las reseñas obtenidas desde el servicio `ReviewsService`.
 */

@Component({
  selector: 'app-reviews-table',
  imports: [CommonModule],
  templateUrl: './reviews-table.component.html',
})
export class ReviewsTableComponent {

  /**
   * Componente que renderiza una tabla/listado de reseñas.
   *
   * Recibe via `@Input()` el array de `Review` que debe mostrar.
   */
  @Input() reviews: Review[] = [];

}
