export interface User {
  uid: string;
  isVerified: boolean;
  username?: string;
  email?: string;
  wallet?: Wallet;
}

export interface Wallet {
  osrs: number;
  rs3: number;
}

export function isConvertibleToUser(data: any): boolean {
  return data.name;
}
