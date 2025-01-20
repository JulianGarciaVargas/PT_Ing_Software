import { Gestora } from '../gestora/gestora.model';
import { Moneda } from '../moneda/moneda.model';

export interface Pais {
  id: number;
  nombre: string;
  gestoras: Gestora[];
  monedas: Moneda[];
}