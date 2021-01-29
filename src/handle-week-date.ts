export const getMonday = (currentDate?: Date): Date => {
  const date = currentDate ?? new Date()
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

export const getMondayToFridayDates = (currentDate?: Date): string[] => {
  const monday = getMonday(currentDate)
  const array = [...new Array(4).keys()]
  const remaining: string[] = []

  array.forEach(element => {
    const newDate = new Date()
    newDate.setDate(monday.getDate() + (element + 1))
    remaining.push(newDate.toString())
  })
  return [monday.toString(), ...remaining]
}
