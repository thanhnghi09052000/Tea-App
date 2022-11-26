import type { AppProps } from 'next/app'
import ThemeProviderWrapper from '../src/theme/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProviderWrapper>
      <Component {...pageProps} />
    </ThemeProviderWrapper>
  )
}
