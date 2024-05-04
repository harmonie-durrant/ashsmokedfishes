import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="img-src https://*;"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/logo-192x192.png" />
                <meta name="theme-color" content="#000" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}