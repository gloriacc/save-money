import Icon from './Icon';
import React, {useState} from 'react';
import styled from 'styled-components';
import {MyCalendar} from './MyCalendar';
import day from 'dayjs';

const Wrapper = styled.div`
  padding: 18px 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > .icon {
    width: 24px;
    height: 24px;
    fill: #E88294;
    margin-right: 8px;
  }
`;

type Props = {
  value: Date | Date[],
  onChange: (date: Date | Date[]) => void
}

const MonthSelection:React.FC<Props> = (props) => {
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState<Date|Date[]>(new Date());

  return (
    <div>
      <Wrapper onClick={()=>setCalendar(true)}>
        <Icon name="calendar"/>
        <div>{date instanceof Array ? day(date[0]).format('YYYY年MM月') : day(date).format('YYYY年MM月')}</div>
      </Wrapper>
      <MyCalendar maxDetail="year" status={calendar} date={props.value} onCalendarChange={c => setCalendar(c)} onDateChange={(d) => {props.onChange(d);setDate(d);}}/>
    </div>
  )
};
export {MonthSelection};