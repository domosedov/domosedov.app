import type { AppProps } from 'next/app'
import { Provider as ScopeProvider } from 'effector-react/scope'
import { ThemeProvider } from 'next-themes'
import { useScope } from '~/app'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const scope = useScope(pageProps.initialData)
  return (
    <ScopeProvider value={scope}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ScopeProvider>
  )
}

export default App
