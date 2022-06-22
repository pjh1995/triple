export const DEFAULT_SEO = {
  title: '트리플: 여행의 모든 것, 트리플로 한 번에',
  description:
    '최저가 예약부터 여행 일정까지 앱 하나로 한 번에! / 항공권, 숙소, 투어·티켓 할인 / 제주도 포함 국내&해외 도시별 여행정보 / 동선 보며 일정짜기 / 장소별 리뷰 / 가계부, 날씨, 길찾기',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://triple.guide/',
    title: '트리플: 여행의 모든 것, 트리플로 한 번에',
    /* eslint-disable @typescript-eslint/naming-convention */
    site_name: '트리플',
    images: [
      {
        url: 'https://assets.triple.guide/images/img-default-page-preview.png',
        width: 285,
        height: 167,
        alt: 'default page preview',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
}
