import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5c6bc0;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: red;
  }
`;
