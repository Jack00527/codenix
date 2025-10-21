import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function useTextScramble(text: string, speed: number = 60) {
  const [displayText, setDisplayText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let iteration = 0

    const scramble = () => {
      setDisplayText(
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index]
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration < text.length) {
        iteration += 1 / 3
        timeout = setTimeout(scramble, speed)
      } else {
        setIsScrambling(false)
      }
    }

    scramble()

    return () => clearTimeout(timeout)
  }, [text, speed])

  return { displayText, isScrambling }
}
