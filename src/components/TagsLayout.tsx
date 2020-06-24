import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const ButtonAtBottom = styled.div`
  background-color: #A6E0C8;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagsLayout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      {props.onClick &&
        <ButtonAtBottom onClick={props.onClick}>
          <Icon name={props.iconName}/>{props.buttonName}
        </ButtonAtBottom>
      }
      {props.link &&
        <Link to={props.link}>
          <ButtonAtBottom>
            <Icon name={props.iconName}/>{props.buttonName}
          </ButtonAtBottom>
        </Link>
      }
    </Wrapper>
  );
}

export {TagsLayout};