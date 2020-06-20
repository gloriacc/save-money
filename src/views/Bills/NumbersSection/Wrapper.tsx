import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #FFF;
  .output {
    line-height: 72px;
    text-align: right;
    font-size: 36px;
    padding: 0 16px;
  }
  .keyboard {
    > button {
      font-size: 18px;
      text-align: center;
      width: 25%;
      height: 64px;
      background: none;
      outline: none;
      float: left;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    } 
  }
`;
export {Wrapper};