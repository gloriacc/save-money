import styled from 'styled-components';

const RemarkSection = styled.section`
  padding: 0 16px;
  display: flex;
  align-items: center;
  > label {
    color: #333;
    margin-right: 16px;
    white-space: nowrap;
    line-height: 72px;
  }
  > input {
    display: block;
    background: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

export {RemarkSection};