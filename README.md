# 실행 방법

1. yarn && yarn build (최초 1회)
2. yarn start

# 기술 스택

## react

컴포넌트 단으로 개발이 가능하므로 코드 재사용 및 유지보수하기가 편합니다.
가상 DOM으로 변경된 부분만 리렌더링하기 때문에 속도가 빠릅니다.

## next.js

SEO에 유리한 SSR 방식으로 구현하기 위하여 사용하였습니다.

### next-seo

Next.js에서 seo를 더욱 손쉽게 적용하기 위하여 사용하였습니다.

## styled-components

Component 단위의 스타일 관리를 위하여 사용하였습니다.

## ts-easing

애니메이션을 구현할 때 Easing 함수 사용을 위하여 사용하였습니다.
