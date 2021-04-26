import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='shortcut icon'
            href='/images/favicon.png'
            type='image/png'
          />

          {/* Primary Meta Tags  */}
          <title>World Trip</title>
          <meta name='title' content='World Trip' />
          <meta
            name='description'
            content='Planeje viagens e conheça possíveis destinos.'
          />

          {/* Open Graph / Facebook  */}
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://worldtrip-viniciusoliveiras.vercel.app/'
          />
          <meta property='og:title' content='World Trip' />
          <meta
            property='og:description'
            content='Planeje viagens e conheça possíveis destinos.'
          />
          <meta property='og:image' content='https://i.imgur.com/nDp6rGT.png' />

          {/* Twitter  */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://worldtrip-viniciusoliveiras.vercel.app/'
          />
          <meta property='twitter:title' content='World Trip' />
          <meta
            property='twitter:description'
            content='Planeje viagens e conheça possíveis destinos.'
          />
          <meta
            property='twitter:image'
            content='https://i.imgur.com/nDp6rGT.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
