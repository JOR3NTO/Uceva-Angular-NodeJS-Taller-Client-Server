import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/reviews.interface';

/**
 * Servicio encargado de generar reseñas falsas para pruebas.
 *
 * Genera un conjunto de `Review` usando `@faker-js/faker`.
 */
export class ReviewsService {

  /**
   * Devuelve una lista de reseñas generadas aleatoriamente.
   *
   * @param countReviews Número de reseñas a generar.
   * @returns Promesa que resuelve en un array de `Review`.
   */
  public async getAllReviews(countReviews: number): Promise<Review[]> {
    const reviews: Promise<Review>[] = [];
    for (let i = 1; i <= countReviews; i++) {
      reviews.push(this.generateReview(i));
    }
    return Promise.all(reviews);
  }

  /**
   * Genera una reseña individual.
   *
   * @param id Identificador de la reseña.
   * @returns Promesa que resuelve en un `Review`.
   */
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