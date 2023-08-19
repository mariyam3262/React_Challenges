import React, { useState } from 'react'
import Calender from 'react-calendar'

function EventCalender() {

    const [date, setDate] = useState(new Date())

  return (
    <div>
      <Calender value ={date} onChange={setDate} />
    </div>
  )
}

export default EventCalender
