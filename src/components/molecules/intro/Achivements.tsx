import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image'

export const Achivements: FC<{aaa?:string}> = () => {
  return (
      <WrapContainer>
          <Logo>
            <img src="/assets/img/triple@2x.png" alt="sss" />
            <span>2019년 2월 기준</span>
          </Logo>
          <section>
            <Metric>
              <MetricItem>
                <strong>100만 명</strong>의 여행자
              </MetricItem>
              <MetricItem>
                <strong>100만 개</strong>의 여행 리뷰
              </MetricItem>
              <MetricItem>
                <strong>470만 개</strong>의 여행 일정
              </MetricItem>
            </Metric>
            <Award>
              <AwardItem>
                <Image
                  src="/assets/img/play-store@2x.png"
                  width="54"
                  height="54"
                  alt="sss"
                />
                <span className="f-md f-gray">
                  2018 구글 플레이스토어
                  <br />
                  올해의 앱 최우수상 수상
                </span>
              </AwardItem>
              <AwardItem>
                <Image
                  src="/assets/img/badge-apple@4x.png"
                  width="54"
                  height="54"
                  alt="sss"
                />
                <span className="f-md f-gray">
                  2018 애플 앱스토어
                  <br />
                  오늘의 여행앱 선정
                </span>
              </AwardItem>
            </Award>
          </section>
        </WrapContainer>
  );
};

const WrapContainer = styled.article`
  display: flex;
  justify-content: center;
  gap: 20%;
  font-family: sans-serif;
`
const Logo = styled.section`
  position: relative;
  width: calc(100% / 3);
  text-align: center;
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
const Metric = styled.div`
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  margin-bottom: 50px;
`
const MetricItem = styled.div`
  margin-bottom: 20px;
`
const Award = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  color: rgba(58, 58, 58, 0.8);
`
const AwardItem = styled.div`
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
`
