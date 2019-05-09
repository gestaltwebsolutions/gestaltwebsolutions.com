import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function About() {
  const { jeremy, ryan } = useStaticQuery(graphql`
    query {
      jeremy: file(relativePath: { eq: "jeremy.jpg" }) {
        ...Profile
      }

      ryan: file(relativePath: { eq: "ryan.jpg" }) {
        ...Profile
      }
    }

    fragment Profile on File {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <h1 className="text-xl">Meet the Team</h1>
      <div className="flex justify-around">
        <Profile
          name="Jeremy Liberman"
          position="Founder, Designer"
          bio={`
            Jeremy has been writing software professionally for over a decade.
            He has experience in a wide array of languages, frameworks, and
            programming paradigms.
          `}
          github="mrleebo"
          twitter="mrleebo"
          file={jeremy}
        />
        <Profile
          name="Ryan Johnson"
          position="Founder, Engineer"
          bio={`
            Ryan likes a lot of cayenne peppers in his enchiladas.
          `}
          github="ryanxjohnson"
          file={ryan}
          even
        />
      </div>
    </Layout>
  );
}

function Profile(props) {
  const { name, position, bio, file, even, github, twitter } = props;
  const color = even ? "teal" : "orange";

  return (
    <div
      className={`w-1/3 m-2 shadow-lg rounded-b-lg border-t-2 border-${color}-darker my-20 bg-${color}-lightest text-${color}-darker pb-1`}
    >
      <div
        className={`mx-auto rounded-full bg-${color}-darker -mt-16 p-px`}
        style={{ width: 150, height: 150 }}
      >
        <Img fluid={file.childImageSharp.fluid} className="rounded-full" />
      </div>

      <div className="w-2/3 mx-auto">
        <div className="float-right">
          {github && (
            <SocialMediaLink
              href={`https://github.com/${github}`}
              color={color}
              icon="github"
            />
          )}
          {twitter && (
            <SocialMediaLink
              href={`https://twitter.com/${twitter}`}
              color={color}
              icon="twitter"
            />
          )}
        </div>

        <div className={`text-center text-${color}-darker`}>
          <h2 className="text-lg mb-2">{name}</h2>
          <span className="ml-4 text-sm opacity-75">{position}</span>
        </div>
        <p
          className={`text-${color}-darker text-sm tracking-wide font-serif text-justify`}
        >
          {bio}
        </p>
      </div>
    </div>
  );
}

function SocialMediaLink({ href, icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`hover:text-${color} mr-1 opacity-50`}
    >
      <i className={`fab fa-${icon}`} />
    </a>
  );
}
