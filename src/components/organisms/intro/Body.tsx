import React, { FC } from 'react'
import styled from 'styled-components'

import { Intro } from '@/components/molecules'

const Main = styled.main`
  height: 100vh;
  margin-top: 20%;
`

export const Body: FC = () => {
  return (
    <Main>
      <Intro.Achivements />
    </Main>
  )
}
