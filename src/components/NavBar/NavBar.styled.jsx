import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: auto;
`;
