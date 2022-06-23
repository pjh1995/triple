import { useRef, useState, useEffect } from 'react'

interface Options extends IntersectionObserverInit {
  once?: boolean
}
export const useIsElementInViewport = (options: Options) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  let observer: IntersectionObserver

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (options.once && entry.isIntersecting) {
      observer.disconnect()
    }
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    observer = new IntersectionObserver(callback, options)
    elementRef.current && observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef, options])

  return { elementRef, isVisible }
}
