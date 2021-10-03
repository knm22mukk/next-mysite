import Head from 'next/head'

export default function MyHead({ title, description, keywords, canonical }) {
  const outputTitle = title || '包装資材営業マンむっくのブログサイト'
  const outputDescription = description || '包装資材、包材等に関する情報を発信中。新商品情報を掲載しています。'
  const outputKeywords = keywords || '包装資材、包材、衛生、使い捨て、消耗品、不織布、食器、洗剤、厨房、'
  const outputCanonical = canonical || 'https://next-mysite.vercel.app/'

  return(
    <Head>
      <title>{ outputTitle }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={outputDescription} />
      <meta name="keywords" content={outputKeywords} />

      <meta property="og:title" content={outputTitle} />
      <meta property="og:description" content={outputDescription} />
      <meta property="og:site_name" content="包装資材営業マンむっくのブログサイト" />
      <meta property="og:image" content="/images/logo.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mukk_houzai" />
      <meta name="twitter:title" content={outputTitle} />
      <meta name="twitter:description" content={outputDescription} />
      <meta name="twitter:image" content="/images/logo.png" />

      <link rel="canonical" href={outputCanonical} />

      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
  )
}