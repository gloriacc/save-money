import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #C4C4C4;
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

const CategorySection: React.FC = () => {
  const map = {'-': '支出', '+': '收入'};
  const [list] = useState<('+'|'-')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {list.map(c =>
          <li
            key={c}
            className={category === c ? 'selected' : ''}
            onClick={()=>{setCategory(c)}}
          >{map[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export {CategorySection};