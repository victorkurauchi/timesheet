import {getMondayToFridayDates} from '../src/handle-week-date'
import { getFilename } from '../src/format-output'

describe('format-output', () => {
  describe('getFilename', () => {
    test('when passing 2 dates, filename output should be firstdate-to-lastdate', () => {
      const custom = new Date()
      custom.setMonth(1)
      custom.setFullYear(2021)
      custom.setDate(8)
      const dates = getMondayToFridayDates(custom)
      const response = getFilename(dates[0], dates[dates.length-1])

      expect(response).toBe("-08-to-12.csv")
      // console.log(response)
    })
  })
})
