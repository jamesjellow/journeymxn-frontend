import App from 'next/app'
import Head from 'next/head'
// import React, { useState, useEffect } from 'react';
import { StateProvider } from '../components/context'

import '../styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateProvider>
        <Head>
          <meta name="description" content="Take a quiz for career recommendation" />
          <meta name="keywords" content="Journeymxn, Career, Recommendation, High School" />
          <meta name="author" content="Justin Kang, Gabe de Mesa, Patrick Talledo Castillofuentes, Mugdhaa Patankar" />
          <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
          <title>Journeymxn</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </StateProvider>
    )
    // return <Component {...pageProps} />
  }
  
}

export default MyApp
