export const getDateFormatted = (dateNumber: number) => {
  const formatter = new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  const date = new Date(dateNumber)

  return formatter.format(date)
}
