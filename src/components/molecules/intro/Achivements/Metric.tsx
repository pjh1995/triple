import React, { FC } from 'react'
import styled from 'styled-components'

import { IncrementCount } from '@/components/atoms'

import FadeInUp from './FadeInUp'

const WrapMetric = styled(FadeInUp)`
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  margin-bottom: 50px;
  animation-delay: 200ms;

  & > * {
    margin-bottom: 20px;
  }
`

interface Item {
  count: number
  text: string
}
interface MetricProps {
  isVisible: boolean
  items: Item[]
}

function MetricItem(props: { item: Item; isVisible: boolean }) {
  const { item, isVisible } = props
  return (
    <div>
      <strong>
        {isVisible ? (
          <IncrementCount count={item.count} animationName="quadratic" />
        ) : (
          <>{item.count}</>
        )}
        만개
      </strong>
      {item.text}
    </div>
  )
}

const Metric: FC<MetricProps> = (props) => {
  const { isVisible, items } = props
  return (
    <WrapMetric animationDelay={100} animationPlay={isVisible}>
      {items.map((item, i) => (
        <MetricItem
          key={`${i}-${item.text}`}
          item={item}
          isVisible={isVisible}
        />
      ))}
    </WrapMetric>
  )
}

export default Metric
