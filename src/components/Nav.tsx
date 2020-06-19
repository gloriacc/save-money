import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/tag.svg');
require('icons/bill.svg');
require('icons/statistic.svg');

const NavWrapper = styled.div`
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      .icon {
        width: 24px;
        height: 24px;
        padding: 0 0 4px 0;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tag"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#bill"/>
          </svg>
          <Link to="/bills">记一笔</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#statistic"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;