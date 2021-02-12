import {getMondayToFridayDates} from '../src/handle-week-date'

describe('handle week dates', () => {
  describe('getMondayToFridayDates', () => {
    test('when calling without specific date, function should return dates for the week from monday to friday', () => {
      const response = getMondayToFridayDates()

      expect(response).toHaveLength(5)
      // console.log(response)
    })

    test('when provided specific date, function should return dates for the specific week from monday to friday', () => {
      const custom = new Date()
      custom.setMonth(0)
      custom.setFullYear(2021)
      custom.setDate(15)

      const response = getMondayToFridayDates(custom)

      console.log(response)
      expect(response).toHaveLength(5)

      const monday = new Date(response[0])
      const friday = new Date(response[4])

      expect(monday.getDay()).toBe(1)
      expect(friday.getDay()).toBe(5)
    })
  })
})
