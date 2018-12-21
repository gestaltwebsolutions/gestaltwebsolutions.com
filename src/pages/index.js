import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Under Construction</h1>
    <p>Sorry, nothing to see here yet...</p>
    <div style={{maxWidth: 600}}>
      <img src="/undraw_under_construction_46pa.svg" alt="Under Construction" />
    </div>
    <Link to="/about/">About Us</Link>
  </Layout>
)

export default IndexPage
