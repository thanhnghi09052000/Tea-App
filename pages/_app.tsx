import { ReactElement, ReactNode } from 'react'

// Type Provider:
import type { AppProps } from 'next/app'
import {NextPage} from 'next'





// Interface & Type Definition:
type NextPageWithLayout = NextPage & {
  getLayOut?: (page:ReactElement) => ReactNode;
}
interface TeaApp extends AppProps {
  Component: NextPageWithLayout
}

function MyApp(props: TeaApp) {
  const getLayOut = props.Component
  return (
    <div></div>
  )
}

export default MyApp
