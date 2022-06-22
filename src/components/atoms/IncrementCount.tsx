import React, { FC, Fragment, useRef, useEffect } from 'react'
import { useAnimation } from '@/hooks'

import type { EasingKey } from '@/type'

interface Iprops {
  count: number
  animationName: EasingKey
  duration?: number
  delay?: number
}

export const IncrementCount: FC<Iprops> = (props) => {
  const { animationName, count = 0, duration = 2000, delay = 0 } = props
  const Ref = useRef<HTMLElement>(null)
  const changeRate = useRef(0)
  changeRate.current = useAnimation(animationName, duration, delay)

  useEffect(() => {
    if (!Ref.current) return
    const percent = Number(changeRate.current.toFixed(2))
    const num = Math.ceil(count * percent)
    Ref.current.innerText = num.toString()
  }, [changeRate.current])

  return <span ref={Ref} />
}
