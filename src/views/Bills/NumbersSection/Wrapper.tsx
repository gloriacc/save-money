import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #19241C;
  background-color: #A6E0C8;
  padding: 12px 16px;
  flex-shrink: 0;
  .output {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .date {
      font-size: 12px;
      text-align: center;
      width: 48px;
      height: 48px;
      line-height: 48px;
      border: 1px solid #19241C;
      border-radius: 50px;
      background-color: #FFF;
      margin-right: 3%;
    }
    .price {
      flex-grow: 1;
      height: 48px;
      line-height: 48px;
      text-align: right;
      font-size: 18px;
      padding: 0 16px;
      background-color: #FFF;
      border: 1px solid #19241C;
      border-radius: 8px;
    }
  }
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    > div {
      font-size: 18px;
      width: 22%;
      height: 48px;
      border: 1px solid #19241C;
      border-radius: 8px;
      background-color: #FFF;
      margin-top: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.ok {
        background-color: #E88294;
        color: #FFF;
        flex-grow: 1;
      }
      &.backspace {
        > .icon {
          width: 36px;
          height: 36px;
          fill: #19241C;
        }
      }
    } 
  }
`;
export {Wrapper};