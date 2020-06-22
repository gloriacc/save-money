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
      <div className="keyboard clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">完成</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export {NumbersSection};