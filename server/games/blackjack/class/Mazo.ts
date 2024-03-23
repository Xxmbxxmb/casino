import { Carta } from './Carta';
import { monos, numeros, pintas } from '../utils/constants';

export class Mazo {
  mazo: Carta[];

  constructor() {
    this.mazo = [];
    this.createDeck();
    this.shuffle('12345');
  }

  createDeck() {
    for (const pinta of pintas) {
      for (const numero of numeros) {
        this.mazo.push(new Carta(pinta, numero));
      }

      for (const mono of monos) {
        this.mazo.push(new Carta(pinta, mono));
      }
    }
  }

  sacarCarta() {
    return this.mazo.shift();
  }

  shuffle(seed: any) {
    const randomGenerator = () => {
      const x = Math.sin(seed) * 10000;
      seed = x - Math.floor(x);
      return seed;
    };

    for (let i = this.mazo.length - 1; i > 0; i--) {
      const j = Math.floor(randomGenerator() * (i + 1));
      [this.mazo[i], this.mazo[j]] = [this.mazo[j], this.mazo[i]];
    }
  }

  show() {
    const pretty = this.mazo.map((c) => `${c.valor}${c.pinta}`);
    return pretty;
  }
}

export default Mazo;
