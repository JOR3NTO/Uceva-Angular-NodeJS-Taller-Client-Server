import { Router } from "express";
import { EmpresaController } from "./empresas.controller";

export class EmpresasRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EmpresaController();

  
    router.get("/:countEmpresas", controller.getAllEmpresas);

    return router;
  }
}