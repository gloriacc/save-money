import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #19241C;
  background-color: #A6E0C8;
  padding: 12px 16px;
  .output {
    line-height: 48px;
    text-align: right;
    font-size: 20px;
    padding: 0 16px;
    background-color: #FFF;
    border: 1px solid #19241C;
    border-radius: 8px;
  }
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    > div {
      font-size: 18px;
      text-align: center;
      width: 22%;
      height: 48px;
      line-height: 48px;
      border: 1px solid #19241C;
      border-radius: 8px;
      background-color: #FFF;
      margin-top: 6px;
      &.ok {
        background-color: #E88294;
        color: #FFF;
      }
    } 
  }
`;
export {Wrapper};