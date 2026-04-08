import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ReviewsService } from "./reviews.service";

/**
 * Controlador HTTP para el módulo de reseñas (reviews).
 *
 * Encapsula los handlers que exponen los endpoints relacionados
 * con reseñas en la API.
 */
export class ReviewsController {

  /** Servicio de reseñas usado por el controlador. */
  private readonly reviewsService = new ReviewsService();

  /**
   * Handler para obtener varias reseñas generadas.
   *
   * Lee `countReviews` de los parámetros de ruta y devuelve un array
   * de reseñas. Responde con código `201` en caso de éxito.
   */
  getAllReviews = (req: Request, res: Response): void => {
    const { countReviews } = req.params;

    setTimeout(() => {
      this.reviewsService
      .getAllReviews(Number(countReviews))
      .then((reviews) => res.status(201).json(reviews))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
