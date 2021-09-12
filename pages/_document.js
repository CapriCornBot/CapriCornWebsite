import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Sidebar2 from "../components/sidebar";
import Router, { useRouter } from "next/router";
class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head />
        <body>
          <Main site={this.props.__NEXT_DATA__.page}/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;