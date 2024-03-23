import { monos } from '../utils/constants';
import { Carta } from './Carta';

export class Jugador {
  mano: Carta[];
  aces: number;
  total: number;
  isCrupier: boolean;

  constructor(isCrupier: boolean = false) {
    this.mano = [];
    this.aces = 0;
    this.total = 0;
    this.isCrupier = isCrupier;
  }

  agregarCarta(carta: Carta) {
    if (carta.valor === monos[0]) this.aces++;
    this.mano.push(carta);
    this.total += carta.getValor() as number;
    this.ajustarAces();
  }

  ajustarAces() {
    if (this.aces > 0 && this.total > 21) {
      this.aces--;
      this.total -= 10;
    }
  }
}

export default Jugador;
