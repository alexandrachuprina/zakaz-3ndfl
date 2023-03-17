import { Html, Head, Main, NextScript } from 'next/document';
import Header  from '@/src/components/Header/index';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        <Header />
      </body>
    </Html>
  )
}
