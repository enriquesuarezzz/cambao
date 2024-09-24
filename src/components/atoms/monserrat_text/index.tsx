'use client'
import { Montserrat } from 'next/font/google'
import { forwardRef, useEffect, useRef } from 'react'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export interface MontserratTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'light' | 'normal' | 'semibold' | 'bold'
  fontSize?: '13px' | '14px' | '16px' | '18px' | '46px'
  leading?: 'normal' | 'none' | 'tight' | 'snug' | 'relaxed' | 'loose'
  className?: string
}

export const MontserratText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  MontserratTextProps
>(
  ({
    text,
    tag = 'p',
    style = 'regular',
    fontSize = '16px',
    className = 'text-black',
    leading = 'normal',
  }) => {
    const textContent = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text
      }
    }, [text])

    function getSize() {
      switch (fontSize) {
        case '13px':
          return 'text-[11px] md:text-[13px]'
        case '14px':
          return 'text-[12px] md:text-[14px]'
        case '16px':
          return 'text-[16px]'
        case '18px':
          return 'text-[18px]'
        case '46px':
          return 'text-[32px] md:text-[46px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'light':
          return 'font-light'
        case 'normal':
          return 'font-normal'
        case 'semibold':
          return 'font-semibold'
        case 'bold':
          return 'font-bold'
      }
    }

    function getLeading() {
      switch (leading) {
        case 'normal':
          return 'leading-normal'
        case 'none':
          return 'leading-none'
        case 'tight':
          return 'leading-tight'
        case 'snug':
          return 'leading-snug'
        case 'relaxed':
          return 'leading-relaxed'
        case 'loose':
          return 'leading-loose'
      }
    }

    const globalStyle = `${montserrat.className} ${getSize()} ${getLeading()} ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          )
        case 'p':
          return (
            <p ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

MontserratText.displayName = 'MontserratText'