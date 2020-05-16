import React from "react"

import { Header } from '../components'
import { Link } from "gatsby"

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Link to="/about/">About</Link>
      <Header />
      Home Page
      <h2>Why</h2>
      <p>
        What do I like to do? Watching tutorials of course but definitely enjoy building
        websites.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga, magni delectus explicabo accusamus velit expedita, incidunt quasi nobis praesentium voluptate deserunt maiores doloribus ipsam laboriosam commodi pariatur vel molestiae!</p>
    </React.Fragment>
  )
}

export default App;


