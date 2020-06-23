import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.div`
  background-color: #A6E0C8;
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
        color: #828282;
        .icon {
          width: 24px;
          height: 24px;
          padding: 0 0 4px 0;
          fill: #828282;
        }
      }
      > a.selected {
        color: #19241C;
        .icon {
          fill: #19241C;
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
          <NavLink to="/details" activeClassName="selected">
            <Icon name="detail"/>
            明细
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