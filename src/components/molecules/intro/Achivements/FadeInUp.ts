import styled from 'styled-components'

const FadeInUp = styled.div<{
  animationDelay: number
  animationPlay?: boolean
  animationDuration?: number
  animationTiming?: string
}>`
  animation: ${({ animationDuration = 0, animationTiming }) =>
    `fadeInUp ${animationDuration}ms ${animationTiming}`};
  animation-delay: ${({ animationDelay }) => `${animationDelay}ms`};
  animation-play-state: ${({ animationPlay = true }) =>
    animationPlay ? 'running' : 'paused'};
`
export default FadeInUp
