import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  padding: 0 16px;
  display: flex;
  align-items: center;
  > label {
    color: #333;
    margin-right: 16px;
    white-space: nowrap;
    line-height: 72px;
  }
  > input {
    display: block;
    background: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

type Props = {
  value: string,
  onChange: (value:string)=>void
}

const RemarkSection: React.FC<Props> = (props) => {
  const remark = props.value;
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>备注</label>
      <input
        type="text"
        placeholder="在这里添加备注"
        ref={refInput}
        defaultValue={remark}
        onBlur={onBlur}
      />
    </Wrapper>
  )
};
export {RemarkSection};
