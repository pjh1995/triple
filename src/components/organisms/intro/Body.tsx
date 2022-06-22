import React, { FC } from 'react'
import styled from 'styled-components'

import { Intro } from '@/components/molecules'

const Main = styled.main`
  height: 200vh;
`

export const Body: FC = () => {
  return (
    <Main>
      <Intro.Message />
      <Intro.Achivements />
    </Main>
  )
}
