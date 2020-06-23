import Icon from './Icon';
import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const HeaderWrapper = styled.header`
  font-size: 16px;
  line-height: 48px;
  background: #A6E0C8;
  text-align: center;
  > div {
    position: absolute;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 22px;
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
        <Icon name="left" onClick={onClickBack}/>
      </div>
      <span>{props.children}</span>
    </HeaderWrapper>
  );
};
export {Header};