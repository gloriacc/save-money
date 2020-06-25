import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  padding: 8px 0;
  flex-shrink: 0;
`;

type Props = {
  value: string,
  onChange: (value:string)=>void
}

const RemarkSection: React.FC<Props> = (props) => {
  const remark = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  }
  return (
    <Wrapper>
      <Input label="备注" placeholder="在这里添加备注" value={remark} onChange={onChange}/>
    </Wrapper>
  )
};
export {RemarkSection};
