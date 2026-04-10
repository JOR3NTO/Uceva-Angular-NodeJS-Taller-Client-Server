import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../interfaces/reviews.interface';

/**
 * Servicio que expone operaciones para obtener reseñas desde la API.
 */

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  /**
   * Servicio que expone operaciones para obtener reseñas desde la API.
   */

  private httpClient = inject(HttpClient);

  /**
   * Obtiene un listado de reseñas desde la API.
   *
   * @param countReviews Número de reseñas a solicitar.
   * @returns Observable que emite un array de `Review`.
   */
  getAllReviews(countReviews: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`api/reviews/${countReviews}`);
  }

}
