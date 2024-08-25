import localFont from 'next/font/local'
import { Sen } from 'next/font/google'

export const majorMonoDisplay = localFont({
  src: './fonts/MajorMonoDisplay-Regular.ttf',
  variable: '--font-major-mono-display',
})

export const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
})
