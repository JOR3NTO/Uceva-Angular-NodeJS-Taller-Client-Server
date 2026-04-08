import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { OrdenesService } from "./ordenes.service";


export class OrdenesController {

  private readonly OrdenesService = new OrdenesService();


  getAllOrdenes = (req: Request, res: Response): void => {
    const { countOrdenes } = req.params;

    setTimeout(() => {
      this.OrdenesService
      .getAllOrdenes(Number(countOrdenes))
      .then((ordenes) => res.status(201).json(ordenes))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
