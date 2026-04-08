import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/reviews.interface';

@Component({
  selector: 'app-reviews-table',
  imports: [CommonModule],
  templateUrl: './reviews-table.component.html',
})
export class ReviewsTableComponent {

  @Input() reviews: Review[] = [];

}
