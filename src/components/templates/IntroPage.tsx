import React, { FC } from 'react'

import { Layout } from '@/components/atoms'
import { Intro } from '@/components/organisms'

export const IntroPage: FC = () => {
  return (
    <Layout>
      <Intro.Body />
    </Layout>
  )
}
