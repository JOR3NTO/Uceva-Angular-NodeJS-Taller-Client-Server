/**
 * Representa una empresa en la aplicación cliente.
 */
export interface Empresa {
    /** Identificador único. */
    id: number;
    /** Nombre comercial de la empresa. */
    name: string;
    /** Teléfono de contacto. */
    phone: string;
    /** Correo electrónico de contacto. */
    email: string;
    /** Categoría a la que pertenece la empresa. */
    category: EmpresaCategory;
}

/** Categorías válidas para `Empresa.category`. */
export type EmpresaCategory = 'Tecnologia' | 'Salud' | 'Educacion' | 'Comercio';

