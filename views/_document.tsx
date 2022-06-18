import React from 'react';
import { Document, Head, Main } from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>An example of @react-ssr/express</title>
          <link rel="stylesheet" href="assets/index.css" />
        </Head>
        <body>
          <div className="container mx-auto">
            <Main />
          </div>
        </body>
      </html>
    );
  }
}
