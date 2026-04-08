import { Router } from "express";
import { ReviewsController } from "./reviews.controller";

/**
 * Routes (enrutador) del módulo de reseñas.
 *
 * Exporta una propiedad estática `routes` que devuelve un `Router`
 * de Express con los endpoints registrados para el módulo.
 */
export class ReviewsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ReviewsController();

    // GET /:countReviews -> obtiene `countReviews` reseñas
    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}