export interface Empresa {
    id: number;
    name: string;
    phone: string;
    email: string;
    category: EmpresaCategory;
}

export type EmpresaCategory = 'Tecnologia' | 'Salud' | 'Educacion' | 'Comercio';

