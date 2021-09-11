import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Sidebar2 from "../components/sidebar";
import Router, { useRouter } from "next/router";
class MyDocument extends Document {
  render() {
    console.log(this.props.__NEXT_DATA__)
    return (
      <Html className="dark">
        <Head />
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;