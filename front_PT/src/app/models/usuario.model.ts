import { Pais } from './pais.model';
import { Moneda } from './moneda.model';

export interface Usuario {
  id: number;
  nombre: string;
  pais: Pais;
  monedas: Moneda[];
}