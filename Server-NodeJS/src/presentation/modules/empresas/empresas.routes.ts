import { Router } from "express";
import { EmpresaController } from "./empresas.controller";

export class EmpresasRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EmpresaController();

  
    /**
     * @openapi
     * /api/empresas/{countEmpresas}:
     *   get:
     *     tags:
     *       - Empresas
     *     summary: Obtener N empresas generadas
     *     parameters:
     *       - name: countEmpresas
     *         in: path
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       '200':
     *         description: Lista de empresas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Empresa'
     *       '500':
     *         description: Error del servidor
     */
    router.get("/:countEmpresas", controller.getAllEmpresas);

    return router;
  }
}