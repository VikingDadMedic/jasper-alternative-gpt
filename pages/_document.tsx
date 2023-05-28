import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document
{
    render ()
    {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/images/logo.png" />
                    <meta name="title" content="Toby AI: An Open Source Jasper Alternative" />
                    <meta name="description" content="Toby AI is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers,
            writers, and businesses. Discover the potential of AI-powered content creation with Toby AI"/>
                    <meta property="og:site_name" content="Toby AI" />

                    <meta property="og:title" content="Toby AI: An Open Source Jasper Alternative" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Generate any UI component in seconds." />
                    <meta
                        name="twitter:description"
                        content="Toby AI is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers, writers, and businesses."
                    />
                    <meta
                        property="og:image"
                        content="https://www.Toby AI/Jemma.ai.png"
                    />
                    <meta
                        name="twitter:image"
                        content="https://www.Toby AI/Jemma.ai.png"
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

export default MyDocument;
