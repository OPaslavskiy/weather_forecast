import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
`;

export const H1 = styled.h1`
  color: red;
  font-size: 100px;
  margin-bottom: 40px;
  font-size: 50px;
`;

export const H2 = styled.h2`
  font-size: 50px;
  margin-bottom: 40px;
  font-size: 25px;
`;

export const H3 = styled.h3`
  margin-bottom: 40px;
`;

export const Text = styled.div`
  height: 50vh;
`;

export const Links = styled(Link)`
  text-decoration: none;
  margin-right: 20px;

  &:hover,
  &:focus {
    color: red;
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 30vw;
  height: auto;
`;
