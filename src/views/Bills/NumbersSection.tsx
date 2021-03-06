import React, {useEffect, useState} from 'react';
import {Wrapper} from './NumbersSection/Wrapper';
import {calcOutput} from './NumbersSection/calcOutput';
import {MyCalendar} from '../../components/MyCalendar';
import day from 'dayjs';
import Icon from '../../components/Icon';

type Props = {
  value: number,
  onChange: (value: number)=>void,
  onOk: ()=>void,
  date: string,
  onDateChange: (value: string)=>void,
}

const NumbersSection: React.FC<Props> = (props) => {
  const {value, date, onDateChange} = props;
  const [output, _setOutput] = useState(value.toString());
  const [calendar, setCalendar] = useState(false);
  const [curDate, setCurDate] = useState<Date|Date[]>(new Date(date));

  useEffect(() => {
    _setOutput(value.toString());
    setCurDate(new Date(date));
  }, [value, date]);
  const setOutput = (output: string) => {
    let amount: string;
    if (output.length > 16) {
      amount = output.slice(0, 16);
    } else if (output.length === 0) {
      amount = '0';
    } else {
      amount = output;
    }
    _setOutput(amount);
    props.onChange(parseFloat(amount));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as  HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === '完成') {
      props.onOk();
      return;
    }
    if (text === '') {
      setOutput(calcOutput('删除', output));
    }
    if ('0123456789.'.split('').indexOf(text)>=0) {
      setOutput(calcOutput(text, output));
    }
  }

  const calcMiniDate = (date:Date) => {
    if (day(date).format('YYYY.MM.DD') !== day((new Date()).toISOString()).format('YYYY.MM.DD')) {
       return day(date).format('MM.DD');
    } else {
      return '今天';
    }
  }
  const [miniDate, setMiniDate] = useState(calcMiniDate(new Date(date)));

  useEffect(() => {
    if (!(curDate instanceof Array)) {
      onDateChange(new Date(curDate).toISOString());
      setMiniDate(calcMiniDate(curDate));
    }
  }, [curDate])

  return (
    <Wrapper>
      <div className="output">
        <div className="date" onClick={()=>setCalendar(true)}>{miniDate}</div>
        <div className="price">{output}</div>
      </div>
      <div className="keyboard" onClick={onClickButtonWrapper}>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>.</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className="backspace"><Icon name="backspace"/></div>
        <div className="ok">完成</div>
      </div>
      <MyCalendar status={calendar} onCalendarChange={c => setCalendar(c)} date={curDate} onDateChange={(d) => setCurDate(d)}/>
    </Wrapper>
  )
}

export {NumbersSection};