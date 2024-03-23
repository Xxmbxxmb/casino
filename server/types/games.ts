export const cards = {
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    ACE: "A",
    JACK: "J",
    QUEEN: "Q",
    KING: "K",

}

export const suits = {
    DIAMOND: "♦",
    CLUB: "♣",
    SPADE: "♠",
    HEART: "♥"
}

export const dbSuits = {
    "♦": "DIAMOND",
    "♣": "CLUB",
    "♠": "SPADE",
    "♥": "HEART"
}

export const dbCards = {
    "2": "TWO",
    "3": "THREE",
    "4": "FOUR",
    "5": "FIVE",
    "6": "SIX",
    "7": "SEVEN",
    "8": "EIGHT",
    "9": "NINE",
    "10": "TEN",
    "A": "ACE",
    "J": "JACK",
    "Q": "QUEEN",
    "K": "KING"
}

export enum Actions {
    HIT = "hit",
    STAND = "stand",
    DOUBLE = "double",
    SPLIT = "split",
    START = "start"
  }