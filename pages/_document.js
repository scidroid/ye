import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=optional"
          rel="stylesheet"
        />
        <title>Ye Quotes</title>
        <link
          rel="icon"
          href="https://www.kindpng.com/picc/m/139-1391192_kanye-face-png-kanye-west-black-and-white.png"
        />
        <meta
          name="description"
          content="Ye is a philosopher of the 33rd century, who has given us multiple phrases that we cannot pass up because they help us as people."
        />
        <meta property="og:url" content="https://ye.scidroid.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ye Quotes" />
        <meta
          property="og:description"
          content="Ye is a philosopher of the 33rd century, who has given us multiple phrases that we cannot pass up because they help us as people."
        />
        <meta
          property="og:image"
          content="https://www.kindpng.com/picc/m/139-1391192_kanye-face-png-kanye-west-black-and-white.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ye.scidroid.co/" />
        <meta name="twitter:title" content="Ye Quotes" />
        <meta
          name="twitter:description"
          content="Ye is a philosopher of the 33rd century, who has given us multiple phrases that we cannot pass up because they help us as people."
        />
        <meta
          name="twitter:image"
          content="https://www.kindpng.com/picc/m/139-1391192_kanye-face-png-kanye-west-black-and-white.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
