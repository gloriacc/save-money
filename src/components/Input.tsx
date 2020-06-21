import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 44px;
  padding: 0 16px;
  > label {
    color: #333;
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    background: none;
    border: none;
    outline: none;
    width: 100%;
  }
`;

type InputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props)=> {
  const {children, label, ...rest} = props;
  return (
    <Label>
      <label>{label}</label>
      <input {...rest}/>
    </Label>
  )
}
export {Input};