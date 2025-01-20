import { Pais } from '../pais/pais.model';
import { Moneda } from '../moneda/moneda.model';

export interface Usuario {
  id: number;
  nombre: string;
  pais: Pais;
  monedas: Moneda[];
}