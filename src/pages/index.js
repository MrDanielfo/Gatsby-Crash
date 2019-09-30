import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby Crash Course</h1>
    <p>First approach to Gatsby JS</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
