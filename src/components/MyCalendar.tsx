import Calendar from 'react-calendar';
import React, {useState} from 'react';
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
  }
`;

type Props = {
  status: boolean,
  onChange: (status: boolean)=>void,
  onDateChange: (date: Date | Date[])=>void
}
const MyCalendar:React.FC<Props> = (props) => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  return (
    <CalendarWrapper className={props.status?'show':''}>
      <div className="shadow" onClick={()=> props.onChange(false)}>

      </div>
      <Calendar
        onChange={(value) => {
          setDate(value);
          props.onDateChange(value);
        }}
        value={date}
        calendarType="ISO 8601"
      />
    </CalendarWrapper>
    )

};
export {MyCalendar};