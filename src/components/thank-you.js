import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function ThankYou() {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aaron-burden-211846-unsplash.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      critical
      fluid={file.childImageSharp.fluid}
      alt="Photo by Aaron Burden on Unsplash"
    />
  );
}
