import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../interfaces/reviews.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  private httpClient = inject(HttpClient);

  getAllReviews(countReviews: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`api/reviews/${countReviews}`);
  }

}
