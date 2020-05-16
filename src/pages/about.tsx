import React from "react"

import { Header } from '../components'
import { Link } from "gatsby"

const About: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Header />
      About Page
    </React.Fragment>
  )
}

export default About;


