import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
// this is a local font and it is primary font for this project
export const sutonnyOMJ = localFont({
  src: './SutonnyOMJ.ttf',
  display: 'swap',
variable: '--font-sutonnyOMJ',
})

export const solaimanlipi = localFont({
    src: './SolaimanLipi.ttf',
    variable: '--font-solaimanlipi',
    });
 


