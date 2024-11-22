import styled from "styled-components";

export const InputWrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  border: none;
  background-color: #e6e6e6;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 24px;
    border-radius: 8px;
  }
`;

export const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    & + input {
      background-color: #fff;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledInput = styled.input`
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  border: none;
  outline: none;
  padding: 8px 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 12px;
  font-size: 14px;
  
  &::placeholder {
    color: lightgray;
  }
  
  &:focus {
    background-color: #f2f3f3;
  }
  
  &:hover {
    background-color: #f2f3f3;
    transition: all 0.2s ease;
  }
  
  @media (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }
`;
