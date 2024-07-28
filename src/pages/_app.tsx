import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/store'
import { Provider } from 'react-redux'

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}
