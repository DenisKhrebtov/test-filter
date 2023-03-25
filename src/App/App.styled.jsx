import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Logo = styled(Link)`
  font-weight: 600;
  color: white;
  font-size: 30px;
  text-decoration: none;
`;
export const AddLink = styled(Link)`
  font-weight: 500;
  color: white;
  font-size: 25px;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;
