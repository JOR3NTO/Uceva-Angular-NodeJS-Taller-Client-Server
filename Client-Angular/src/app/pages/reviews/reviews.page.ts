import { Component, inject } from '@angular/core';
import { ReviewsTableComponent } from '../../components/reviews-table/reviews-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { State } from '../../interfaces/state.interface';
import { Review } from '../../interfaces/reviews.interface';
import { ReviewsService } from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-reviews',
  imports: [ReviewsTableComponent, AlertComponent],
  templateUrl: './reviews.page.html',
})
export class ReviewsPage {

  /**
   * Página que muestra un listado de reseñas.
   * Se encarga de solicitar las reseñas al `ReviewsService` y pasar
   * los datos al componente `ReviewsTableComponent`.
   */

  /** Lista de reseñas mostradas en la vista */
  reviews: Review[] = [];

  /** Estado de la página (`init` | `loading` | `success` | `error`) */
  state: State = 'init';

  /** Servicio para obtener reseñas */
  private reviewsService = inject(ReviewsService);

  /**
   * Inicializa la página: solicita reseñas y actualiza el estado.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.reviewsService.getAllReviews(10).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      }
    });
  }

}
