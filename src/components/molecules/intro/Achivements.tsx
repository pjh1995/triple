import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { IncrementCount } from '@/components/atoms'

const WrapContainer = styled.article`
  display: flex;
  justify-content: center;
  gap: 20%;
  font-family: sans-serif;

  .fade-in {
    animation: fadeInUp 700ms ease-in-out;
  }
`

const FadeInUp = styled.div<{ animationDelay: number }>`
  animation: fadeInUp 700ms ease-in-out;
  animation-delay: ${({ animationDelay }) => `${animationDelay}ms`};
`

const Logo = styled(FadeInUp)`
  position: relative;
  width: calc(100% / 3);
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
const Metric = styled(FadeInUp)`
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  margin-bottom: 50px;
  animation-delay: 200ms;

  & > * {
    margin-bottom: 20px;
  }
`

const Award = styled(FadeInUp)`
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

export const Achivements: FC = () => {
  const userCount = 100
  const reviewCount = 100
  const scheduleCount = 470
  return (
    <WrapContainer>
      <Logo animationDelay={0}>
        <img src="/assets/img/triple@2x.png" alt="logo" />
        <span>2019년 2월 기준</span>
      </Logo>
      <section>
        <Metric animationDelay={100}>
          <MetricItem count={userCount} text="의 여행자" />
          <MetricItem count={reviewCount} text="의 여행 리뷰" />
          <MetricItem count={scheduleCount} text="의 여행 일정" />
        </Metric>
        <Award animationDelay={200}>
          <AwardItem src="/assets/img/play-store@2x.png" alt="플레이스토어">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItem>
          <AwardItem src="/assets/img/badge-apple@4x.png" alt="애플 뱃지">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItem>
        </Award>
      </section>
    </WrapContainer>
  )
}

function MetricItem(props: { count: number; text: string }) {
  return (
    <div>
      <strong>
        <IncrementCount count={props.count} animationName="quadratic" />만 개
      </strong>
      {props.text}
    </div>
  )
}

function AwardItem(props: { src: string; alt: string; children: ReactNode }) {
  return (
    <div>
      <Image src={props.src} width="54" height="54" alt={props.alt} />
      <span className="f-md f-gray">{props.children}</span>
    </div>
  )
}
