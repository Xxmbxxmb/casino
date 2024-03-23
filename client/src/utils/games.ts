export const getValor = (carta: {pinta: string; valor: string | number}): number => {
    if (["J","Q","K"].includes(carta.valor as string)) return 10
    else if (carta.valor === "A") return 11
    else return carta.valor as number
}

export const fixValue = (carta: {pinta: string; valor: string | number}, total: number, aces: number) => {
    let t = total
    let a = aces
    let valor = getValor(carta)
    if (carta.valor === "A") a ++
    t += valor
    if (t > 21 && a > 0){
      a --
      valor -= 10
    }

    return valor
}