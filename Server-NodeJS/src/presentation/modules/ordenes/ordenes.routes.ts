import { Router } from "express";
import { OrdenesController } from "./ordenes.controller";

export class OrdenesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdenesController();

    /**
     * @openapi
     * /api/ordenes/{countOrdenes}:
     *   get:
     *     tags:
     *       - Ordenes
     *     summary: Obtener las últimas N órdenes
     *     parameters:
     *       - name: countOrdenes
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       '200':
     *         description: Lista de órdenes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Orden'
     *       '500':
     *         description: Error del servidor
     */
    router.get("/:countOrdenes", controller.getAllOrdenes);

    return router;
  }
}