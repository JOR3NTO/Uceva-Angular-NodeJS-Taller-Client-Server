import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/reviews.interface';

@Component({
  selector: 'app-reviews-table',
  imports: [CommonModule],
  templateUrl: './reviews-table.component.html',
})
export class ReviewsTableComponent {

  /** Array de reseñas que se muestran en la tabla. */
  @Input() reviews: Review[] = [];

}
