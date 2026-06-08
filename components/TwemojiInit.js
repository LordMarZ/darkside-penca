'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function TwemojiInit() {
  const pathname = usePathname()

  useEffect(() => {
    function parse() {
      if (window.twemoji) {
        window.twemoji.parse(document.body, { folder: 'svg', ext: '.svg' })
      }
    }

    if (!window.twemoji) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/twemoji.min.js'
      script.onload = parse
      document.head.appendChild(script)
    } else {
      parse()
    }
  }, [pathname])

  return null
}