import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function HeroImage() {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "debby-hudson-555209-unsplash.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 600, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={file.childImageSharp.fixed}
      className="hero-image"
      critical
      alt="Photo by Debby Hudson on Unsplash"
    />
  );
}
