import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Sidebar2 from "../components/sidebar";
import Navbar from "../components/navbar";
import Router, { useRouter } from "next/router";
class MyDocument extends Document {
  render() {
    console.log(this.props.__NEXT_DATA__)
    return (
      <Html className="dark">
        <Head />
        <body className="bg-white text-black dark:bg-black dark:text-white">
        <div className="flex">
          <Sidebar2 page={this.props.__NEXT_DATA__.page}></Sidebar2>
          <div className="flex-grow flex-col bg-gray-700">
            <Navbar page={this.props.__NEXT_DATA__.page}></Navbar>
            <Main />
          </div>
        </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;