import { NextFont } from 'next/dist/compiled/@next/font'
import { Roboto } from 'next/font/google'

export const roboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '400',
    variable: "--font-roboto",
})