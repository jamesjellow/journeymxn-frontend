import App from 'next/app'
import Head from 'next/head'
import { quizProvider } from '../components/quiz_context.js'

import '../styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <quizProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
          <title>Journeymxn</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </quizProvider>
    )
    // return <Component {...pageProps} />
  }
  
}

export default MyApp
