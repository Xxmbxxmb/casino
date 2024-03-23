import { monos } from '../utils/constants';

export class Carta {
  pinta: string;
  valor: number | string;

  constructor(pinta: string, valor: number | string) {
    this.pinta = pinta;
    this.valor = valor;
  }

  getValor() {
    if (monos.slice(1).includes(this.valor as string)) return 10;
    else if (this.valor === monos[0]) return 11;
    else return this.valor;
  }
}
