import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * 16px);
  margin-bottom: calc(-1 * 32px);
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3 - 16px);
  margin-bottom: 52px;
  margin-right: 16px;
  max-width: 200px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const Title = styled.p`
  margin: 8px 0;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;
