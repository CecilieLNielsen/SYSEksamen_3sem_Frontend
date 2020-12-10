import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Calendar = ({ arrival, onArrivalChange, departure, onDepartureChange }) => {
  return (
    <span>
      <DateRangePicker
        startDate={arrival}
        endDate={departure}
        onStartDateChange={onArrivalChange}
        onEndDateChange={onDepartureChange}
        minimumDate={new Date()}
        minimumLength={1}
        format='yyyy/MM/dd'
        locale={enGB}
        
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
          <div className='date-range'>
            <input
              className={'input' + (focus === START_DATE ? ' -focused' : '')}
              {...startDateInputProps}
              placeholder='Start date'
            />
            <span className='date-range_arrow' />
            <input
              className={'input' + (focus === END_DATE ? ' -focused' : '')}
              {...endDateInputProps}
              placeholder='End date'
            />
          </div>
        )}
      </DateRangePicker>
    </span>
  )
}

export default Calendar;