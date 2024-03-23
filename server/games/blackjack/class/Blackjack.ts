import { WalletDoc } from '../utils/types';
import { Carta } from './Carta';
import Jugador from './Jugador';
import Mazo from './Mazo';

interface GameOptions {
  double: boolean;
  gameOver: boolean;
  isPlaying: boolean;
  bet?: number | string;
  wallet?: WalletDoc;
  winner?: "PLAYER" | "DEALER" | "PUSH"
  lastCards?: Carta[]
}

export class Blackjack {
  public mazo: Mazo;
  public jugador: Jugador;
  public crupier: Jugador;
  public options: GameOptions;

  constructor() {
    this.mazo = new Mazo();
    this.jugador = new Jugador();
    this.crupier = new Jugador();

    this.options = {
      double: false,
      gameOver: false,
      isPlaying: false,
    };
  }

  hit(){
    const card = this.mazo.sacarCarta() as Carta
    this.jugador.agregarCarta(card)
    return { card, total: this.jugador.total }
  }

  getWinner(){
    if (this.jugador.total > 21) return "DEALER"
    if (this.crupier.total > this.jugador.total) {
      return 'DEALER';
    } else if (this.crupier.total < this.jugador.total) {
      return 'PLAYER';
    } else {
      return 'PUSH';
    }
  }

  stand() {
    if (!this.options.gameOver) {
      const dealerCards: Carta[] = []
      this.options = {
        ...this.options,
        gameOver: true,
        isPlaying: false,
      }

      while(this.crupier.total < 17) {
        const carta = this.mazo.sacarCarta() as Carta
        this.crupier.agregarCarta(carta)
        dealerCards.push(carta)
      }

      if (this.crupier.total > 21) {
        this.options = {
          ...this.options,
          winner: this.jugador.total > 21 ? "DEALER" : "PLAYER"
        }
      } else {
        const winner = this.getWinner();
        
        this.options = {
          ...this.options,
          winner: this.jugador.total > 21 ? "DEALER" : winner
        }
      } 

      this.options.lastCards = dealerCards
  }
}

  startGame({ bet, wallet }: { bet: number; wallet: WalletDoc }) {
    this.dealCards();
    this.options = {
      ...this.options,
      double: false,
      gameOver: false,
      isPlaying: true,
      bet,
      wallet
    };
  }

  dealCards() {
    this.jugador.agregarCarta(this.mazo.sacarCarta() as Carta);
    this.crupier.agregarCarta(this.mazo.sacarCarta() as Carta);
    this.jugador.agregarCarta(this.mazo.sacarCarta() as Carta);
  }

  recoverGame({
    bet,
    dealedCards,
  }: {
    bet: number;
    dealedCards: number;
  }) {
    this.dealCards();
    this.options = {
      ...this.options,
      double: false,
      gameOver: false,
      isPlaying: true,
      bet,
    };

    const remainingCards = dealedCards - 3;

    for (let i = 0; i < remainingCards; i++) {
      this.jugador.agregarCarta(this.mazo.sacarCarta() as Carta);
    }
  }
}