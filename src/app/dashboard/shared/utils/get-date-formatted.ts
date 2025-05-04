export const getDateFormatted = (dateNumber: number) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric'
  })

  const date = new Date(dateNumber)

  return formatter.format(date)
}
