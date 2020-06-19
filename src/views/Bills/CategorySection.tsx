import styled from 'styled-components';

const CategorySection = styled.section`
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

export {CategorySection};