import Calendar from 'react-calendar';
import React from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  &.show {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  > .shadow {
    background-color: rgba(25,36,28,0.5);
    width: 100%;
    height: 100%;
  } 
  > .react-calendar {
    width: 100%;
    border: none;
    .react-calendar__tile--active {
      background-color: #A6E0C8;
    }
    .react-calendar__tile--now {
      background-color: #E88294;
      color: #FFF;
    }
  }
`;

type Props = {
  status: boolean,
  date: Date | Date[],
  onCalendarChange: (status: boolean)=>void,
  onDateChange: (date: Date | Date[])=>void,
  maxDetail?: "month" | "year" | "decade" | "century" | undefined
}
const MyCalendar:React.FC<Props> = (props) => {
  return (
    <CalendarWrapper className={props.status?'show':''}>
      <div className="shadow" onClick={()=> props.onCalendarChange(false)}>

      </div>
      <Calendar
        onChange={(value) => {
          props.onDateChange(value);
          props.onCalendarChange(false);
        }}
        maxDetail={props.maxDetail}
        value={props.date}
        calendarType="ISO 8601"
      />
    </CalendarWrapper>
    )

};
export {MyCalendar};