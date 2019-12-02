// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";

const styles = () => css`
  html,
  body,
  #root {
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }
`;

const GlobalStyle: React.FC = withTheme(() => <Global styles={styles()} />);

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <GlobalStyle />
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
