import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render(){

        return(
            <Html lang='pt-BR'>

                <Head>

                    <link rel="shortcut icon" href="/logo.svg" type="/logo.svg" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

                    <title>A. Silva Cutelaria</title>

                    

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>

        );

    };
    
}