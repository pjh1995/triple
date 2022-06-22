import React, { FC } from 'react'

import { useAnimation } from '@/hooks'
import type { EasingKey } from '@/types'

interface Iprops {
  count: number
  animationName: EasingKey
  duration?: number
  delay?: number
}

export const IncrementCount: FC<Iprops> = (props) => {
  const { animationName, count = 0, duration = 2000, delay = 0 } = props
  const changeRate = useAnimation(animationName, duration, delay)
  const number = Math.ceil(changeRate * count)

  return <span>{number}</span>
}
