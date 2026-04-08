import { Router } from "express";
import { EmpresaController } from "./empresas.controller";

export class EmpresasRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EmpresaController();

  
    /**
     * Ruta para obtener N empresas generadas por el servicio.
     * @route GET /api/empresas/:countEmpresas
     * @param countEmpresas Número de empresas a generar (obtenido de los parámetros de la ruta)
     * @returns Lista de empresas generadas en formato JSON
     */
    router.get("/:countEmpresas", controller.getAllEmpresas);

    return router;
  }
}