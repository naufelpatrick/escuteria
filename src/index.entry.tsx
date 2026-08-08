import type { IndexComponentProps } from '@wroud/vite-plugin-ssg'
import { createAppConfig } from '@wroud/vite-plugin-ssg/app'
import { Body, Head, Html } from '@wroud/vite-plugin-ssg/react/components'
import { HelmetProvider } from 'react-helmet-async'
import { App } from './App'
import { publicRoutes } from './publicRoutes'
import { structuredDataForPath } from './structuredData'
import './styles.css'

function Index({ context }: IndexComponentProps) {
  const pathname = new URL(context.href ?? '/', 'https://escuteria.com.br').pathname
  const structuredData = structuredDataForPath(pathname)

  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#24133f" />
        <meta
          name="description"
          content="Escuteria — escuta ativa com IA para instituições de ensino."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Escuteria — Escuta ativa com IA</title>
        {structuredData && (
          <script
            data-rh="true"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
      </Head>
      <Body>
        <div id="root">
          <HelmetProvider>
            <App path={pathname} />
          </HelmetProvider>
        </div>
      </Body>
    </Html>
  )
}

export default createAppConfig(Index, {
  onRoutesPrerender: () => publicRoutes,
})
