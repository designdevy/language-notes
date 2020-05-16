import React from "react"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { GlobalStyles } from './index'

const Title = styled.h1`

`

const Header: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Language Notes</title>
      </Helmet>
      <Title>Language Notes</Title>
    </React.Fragment>
  )
}

export default Header;