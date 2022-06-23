import React, { FC } from 'react'
import styled from 'styled-components'

import FadeInUp from './FadeInUp'

const WrapLogo = styled(FadeInUp)`
  position: relative;
  width: calc(100% / 3);
  height: fit-content;
  text-align: center;
  animation-delay: 100ms;

  img {
    max-width: 100%;
    height: auto;
  }
  span {
    position: absolute;
    left: 50%;
    bottom: 15%;
    transform: translateX(-50%);
    color: rgba(58, 58, 58, 0.7);
    font-size: 15px;
  }
`

interface LogoProps {
  text: string
  isVisible?: boolean
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <WrapLogo animationDelay={0} animationPlay={props.isVisible}>
      <img src="/assets/img/triple@2x.png" alt="logo" />
      <span>{props.text}</span>
    </WrapLogo>
  )
}

export default Logo
