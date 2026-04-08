import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/reviews.interface';

export class ReviewsService {
  public async getAllReviews(countReviews: number): Promise<Review[]> {
    const reviews: Promise<Review>[] = [];
    for (let i = 1; i <= countReviews; i++) {
      reviews.push(this.generateReview(i));
    }
    return Promise.all(reviews);
  }

  private generateReview(id: number): Promise<Review> {
    return Promise.resolve({
      id,
      productId: faker.number.int({ min: 1, max: 100 }),
      userName: faker.internet.username(),
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.lorem.sentence()
    });
  }
}