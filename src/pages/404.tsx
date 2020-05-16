import React from "react"

import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const Title = styled.h1`
  color: red;
  margin: 0;
  padding: 0;
`

const NotFound: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle />
      <Title>404 - NotFound</Title>

    </React.Fragment>
  )
}

export default NotFound;