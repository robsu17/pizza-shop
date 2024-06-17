export const dateFromatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function diffDateMinutes(dateStart: Date, dateEnd: Date) {
  const diffDateInMilli = dateEnd - dateStart
}
