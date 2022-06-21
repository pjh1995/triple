import React, { FC } from 'react';
import styled from 'styled-components';
import { Achivements } from '@/components/molecules/intro';

const Body: FC = () => {
  return (
        <Main>
            <Achivements />
        </Main>
  );
};

export default Body

const Main = styled.main`
  height: 100vh;
  margin-top:20%;
`;
