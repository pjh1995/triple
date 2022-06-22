import type { NextPage } from 'next'

import { ErrorPage } from '@/components/templates'

const Custom404: NextPage = () => (
  <ErrorPage statusCode={404} title="Page Not Found" />
)

export default Custom404
