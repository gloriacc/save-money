import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  > ul {
    display: flex;
   > li {
    width: 50%;
    font-size: 24px;
    line-height: 64px;
    text-align: center;
    &.selected::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: #333; 
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