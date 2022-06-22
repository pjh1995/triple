import React from 'react'
import styled from 'styled-components'

const WrapContainer = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 100%;
`

export function Message() {
  return (
    <WrapContainer>
      <h1>스크롤을 아래로 내려주세요.</h1>
    </WrapContainer>
  )
}
