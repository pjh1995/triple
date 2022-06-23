import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import FadeInUp from './FadeInUp'

const WrapAward = styled(FadeInUp)`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  color: rgba(58, 58, 58, 0.8);
  animation-delay: 300ms;
  & > * {
    display: flex;
    gap: 10px;
    align-items: center;

    img {
      width: 3.5rem;
    }
    span {
      white-space: pre-wrap;
      opacity: 0.8;
      font-weight: bold;
    }
  }
`

interface Item {
  src: string
  alt: string
  children: ReactNode
}
interface AwardProps {
  isVisible: boolean
  items: Item[]
}

function AwardItem(props: Item) {
  return (
    <div>
      <Image src={props.src} width="54" height="54" alt={props.alt} />
      <span className="f-md f-gray">{props.children}</span>
    </div>
  )
}

const Award: FC<AwardProps> = (props) => {
  const { isVisible, items } = props
  return (
    <WrapAward animationDelay={200} animationPlay={isVisible}>
      {items.map((item, i) => (
        <AwardItem key={`${i}-${item.src}`} {...item}>
          {item.children}
        </AwardItem>
      ))}
    </WrapAward>
  )
}

export default Award
