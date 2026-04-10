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
    /**
     * @openapi
     * /api/reviews/{countReviews}:
     *   get:
     *     tags:
     *       - Reviews
     *     summary: Obtener N reseñas generadas
     *     parameters:
     *       - name: countReviews
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       '200':
     *         description: Lista de reseñas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Review'
     *       '500':
     *         description: Error del servidor
     */
    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}