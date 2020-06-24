import React, {useEffect, useState} from 'react';
import {Wrapper} from './NumbersSection/Wrapper';
import {calcOutput} from './NumbersSection/calcOutput';
import {MyCalendar} from '../../components/MyCalendar';
import day from 'dayjs';

type Props = {
  value: number,
  onChange: (value: number)=>void,
  onOk: ()=>void,
  date: string,
  onDateChange: (value: string)=>void,
}

const NumbersSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState<Date|Date[]>(new Date(props.date));

  useEffect(() => {
    _setOutput(props.value.toString());
    setDate(new Date(props.date));
  }, [props.value, props.date]);
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
    if ('0123456789.+-'.split('').concat(['删除']).indexOf(text)>=0) {
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
  const [miniDate, setMiniDate] = useState(calcMiniDate(new Date(props.date)));
  useEffect(() => {
    if (!(date instanceof Array)) {
      props.onDateChange(new Date(date).toISOString());
      setMiniDate(calcMiniDate(date));
    }
  }, [date])

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="keyboard" onClick={onClickButtonWrapper}>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div onClick={()=>setCalendar(true)}>{miniDate}</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>+</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>-</div>
        <div>.</div>
        <div>0</div>
        <div>删除</div>
        <div className="ok">完成</div>
      </div>
      <MyCalendar status={calendar} onChange={c => setCalendar(c)} date={date} onDateChange={(d) => setDate(d)}/>
    </Wrapper>
  )
}

export {NumbersSection};