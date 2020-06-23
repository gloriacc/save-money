import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background-color: #A6E0C8;
  > ul {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 48px;
   > li {
    width: 18%;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    margin-right: 16px;
    margin-left: 16px;
    &.selected::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #19241C; 
    }
   }
  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+')=>void
}

const CategorySection: React.FC<Props> = (props) => {
  const map = {'-': '支出', '+': '收入'};
  const [list] = useState<('+'|'-')[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {list.map(c =>
          <li
            key={c}
            className={category === c ? 'selected' : ''}
            onClick={()=>{props.onChange(c)}}
          >{map[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export {CategorySection};