import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./header";
import "./layout.css";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  wrap: PropTypes.node
};

Layout.defaultProps = {
  wrap: null
};

export default function Layout({ children, wrap }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
          integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
          integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
          crossorigin="anonymous"
        />{" "}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
          integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header siteTitle={site.siteMetadata.title} />

      {wrap}

      <div className="container mx-auto px-4 pb-6">{children}</div>
    </>
  );
}
