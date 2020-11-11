import Head from 'next/head'
import { SEOData } from '../public/seo-data';

export const Meta = () => {

  const description = 'Pranjal Dubey is a programmer and part-time photographer based in Bangalore, India.';

  return (
    <Head>
      <title>Pranjal Dubey</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="Pranjal Dubey" />
      <meta property="og:title" content="Pranjal Dubey" />
      <meta property="og:url" content="https://pranjaldubey.com" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://pranjaldubey.com/images/pranjal.jpg" />
      <meta property="og:image:alt" content="Pranjal Dubey's photograph" />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEOData.SchemaData) }} />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto&display=swap" rel="stylesheet" />
    </Head>
  )
}