import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function About() {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>About Gestalt Web Solutions LLC</h1>
      <p>Our names are Jeremy and Ryan. You'll learn more about us soon.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
