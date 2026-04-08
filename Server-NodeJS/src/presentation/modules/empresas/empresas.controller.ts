import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { EmpresasService } from "./empresas.service";

/**
 * Controller encargado de exponer endpoints relacionados con empresas.
 *
 * Las acciones de este controlador delegan la lógica en `EmpresasService`
 * y manejan la respuesta HTTP, incluyendo manejo de errores centralizado.
 * 
 * @remarks
 * Actualmente, el controlador solo tiene un método para obtener un listado
 * de empresas generadas dinámicamente, pero se pueden agregar más métodos
 * para otras operaciones relacionadas con empresas (crear, actualizar, eliminar, etc.).
 * 
 * @see EmpresasService para la lógica de generación de empresas.
 * 
 */
export class EmpresaController {

  /** Servicio de negocio para empresas. */
  private readonly empresasService = new EmpresasService();


  /**
   * Devuelve una lista de empresas.
   * Parámetros URL: `:countEmpresas` — número de empresas a generar.
   */
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
