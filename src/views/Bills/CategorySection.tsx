import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../../components/Icon';
import {useHistory} from 'react-router-dom';

const Wrapper = styled.section`
  flex-shrink: 0;
  > .back {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 22px;
    top: 9px;
  }
  > ul {
    &.default {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 48px;
      background-color: #A6E0C8;
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
    &.mini {
      text-align: right;
      padding: 6px 16px;
      li {
        display: inline-block;
        &:first-child {
          margin-right: 8px;
        }
        &.selected {
          border-bottom: 1px solid #A6E0C8;
          color: #A6E0C8;
        }
      }
    } 
  }
`;

type Props = {
  value: '-' | '+',
  type?: 'default' | 'mini',
  onChange: (value: '-' | '+')=>void,
  backEnabled?: boolean
}
const CategorySection: React.FC<Props> = (props) => {
  const map = {'-': '支出', '+': '收入'};
  const [list] = useState<('+'|'-')[]>(['-', '+']);
  const category = props.value;
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      {props.backEnabled && <Icon className="back" name="back" onClick={onClickBack}/>}
      <ul className={props.type || 'default'}>
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