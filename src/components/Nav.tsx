import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  background-color: #FFFFFF;
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 8px 0;
      font-size: 12px;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
          padding: 0 0 4px 0;
        }
      }
      > a.selected {
        color: red;
        .icon {
          fill: red;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/bills" activeClassName="selected">
            <Icon name="bill"/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistic"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;