import React, { FC, ReactNode } from 'react'

interface IProps {
  test: boolean
  children: ReactNode
}

export const Maybe: FC<IProps> = ({ test, children }) => (
  <>{test ? children : null}</>
)
