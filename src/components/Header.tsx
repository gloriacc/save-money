import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const HeaderWrapper = styled.header`
  font-size: 16px;
  line-height: 48px;
  //background: #A6E0C8;
  text-align: center;
  flex-shrink: 0;
  > div {
    position: absolute;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 22px;
    > .icon {
      fill: #A6E0C8;
      width: 30px;
      height: 30px;
    }
  }
`;
const Header = (props: any) => {
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <HeaderWrapper>
      <div>
        <Icon name="back" onClick={onClickBack}/>
      </div>
      <span>{props.children}</span>
    </HeaderWrapper>
  );
};
export {Header};