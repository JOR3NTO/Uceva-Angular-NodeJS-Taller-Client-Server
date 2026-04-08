import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { EmpresasService } from "./empresas.service";

export class EmpresaController {

  private readonly empresasService = new EmpresasService();

 
  getAllEmpresas = (req: Request, res: Response): void => {
    const { countEmpresas } = req.params;

    setTimeout(() => {
      this.empresasService
      .getAllEmpresas(Number(countEmpresas))
      .then((empresas) => res.status(201).json(empresas))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
