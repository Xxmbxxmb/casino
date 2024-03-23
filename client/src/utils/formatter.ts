const tenMillion = Math.pow(10, 7);
const oneMillion = Math.pow(10, 6);
const oneK = Math.pow(10, 3);

export const formatMillions = (amount: string | number): string => {
  const total = Number(amount);
  let formatted;

  if (total >= tenMillion) {
    formatted = (total / oneMillion).toFixed(1);
    return `${formatted}M`;
  } else {
    formatted = (total / oneK).toFixed(0);
    return `${formatted}K`;
  }
};
