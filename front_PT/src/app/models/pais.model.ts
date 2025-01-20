import { Gestora } from './gestora.model';
import { Moneda } from './moneda.model'

export interface Pais {
  id: number;
  nombre: string;
  gestoras: Gestora[];
  monedas: Moneda[];
}