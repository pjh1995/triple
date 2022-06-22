import React, { FC, ReactNode } from 'react'

interface MaybeProps {
  test: boolean
  children: ReactNode
}

export const Maybe: FC<MaybeProps> = ({ test, children }) => (
  <>{test ? children : null}</>
)
