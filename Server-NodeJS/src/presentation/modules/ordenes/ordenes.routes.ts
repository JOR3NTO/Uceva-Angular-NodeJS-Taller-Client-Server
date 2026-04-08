import { Router } from "express";
import { OrdenesController } from "./ordenes.controller";

export class OrdenesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new OrdenesController();

    router.get("/:countOrdenes", controller.getAllOrdenes);

    return router;
  }
}