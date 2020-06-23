import React, {useState} from 'react';
import {Wrapper} from './NumbersSection/Wrapper';
import {calcOutput} from './NumbersSection/calcOutput';

type Props = {
  value: number,
  onChange: (value: number)=>void,
  onOk: ()=>void
}

const NumbersSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
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
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text)>=0) {
      setOutput(calcOutput(text, output));
    }
  }
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="keyboard" onClick={onClickButtonWrapper}>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>今天</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>+</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>-</div>
        <div>.</div>
        <div className="zero">0</div>
        <div>删除</div>
        <div className="ok">完成</div>
      </div>
    </Wrapper>
  )
}

export {NumbersSection};