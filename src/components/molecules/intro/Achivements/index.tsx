import React, { FC } from 'react'
import styled from 'styled-components'

import { useIsElementInViewport } from '@/hooks'

import Logo from './Logo'
import Metric from './Metric'
import Award from './Award'

const WrapContainer = styled.article`
  display: flex;
  justify-content: center;
  gap: 20%;
  font-family: sans-serif;
`

export const Achivements: FC = () => {
  const userCount = 100
  const reviewCount = 100
  const scheduleCount = 470
  const { elementRef, isVisible } = useIsElementInViewport({
    once: true,
    rootMargin: '0px 0px -10% 0px',
  })
  const logoText = '2019년 2월 기준'
  const metricItems = [
    {
      count: userCount,
      text: '의 여행자',
    },
    {
      count: reviewCount,
      text: '의 여행자리뷰',
    },
    {
      count: scheduleCount,
      text: '의 여행 일정',
    },
  ]
  const AwardItems = [
    {
      src: '/assets/img/play-store@2x.png',
      alt: '플레이스토어',
      children: (
        <>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </>
      ),
    },
    {
      src: '/assets/img/badge-apple@4x.png',
      alt: '애플 뱃지',
      children: (
        <>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </>
      ),
    },
  ]

  return (
    <WrapContainer ref={elementRef}>
      <Logo isVisible={isVisible} text={logoText} />
      <section>
        <Metric isVisible={isVisible} items={metricItems} />
        <Award isVisible={isVisible} items={AwardItems} />
      </section>
    </WrapContainer>
  )
}
