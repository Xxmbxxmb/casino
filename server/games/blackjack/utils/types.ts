export enum Winners {
  DEALER = 'DEALER',
  PLAYER = 'PLAYER',
  PUSH = 'PUSH',
}

export enum Players {
  DEALER = 'DEALER',
  PLAYER = 'PLAYER',
}

export enum Currency {
  OSRS = 'OSRS',
  RS3 = 'RS3',
}

export enum BlackjackActions {
  HIT = 'hit',
  STAND = 'stand',
  DOUBLE = 'double',
  SPLIT = 'split',
}

export interface WalletDoc {
  osrs: number;
  rs3: number;
}
