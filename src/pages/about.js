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
      <SEO
        title="About"
        description={`
        Meet the team that created Gestalt Web Solutions LLC. Jeremy has been
        writing software for over a decade using a variety of languages and 
        frameworks. Ryan can conquer any technical obstacle with his own blend
        of ingenuity and grit.
      `}
      />
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
          blog="https://jeremyliberman.com"
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
  const { name, position, bio, file, even, github, twitter, blog } = props;
  const color = even ? "teal" : "orange";

  return (
    <div
      className={`relative w-1/3 m-2 shadow-lg rounded-b-lg border-t-2 border-${color}-dark my-20 bg-grey-lightest text-${color}-darker pb-1`}
    >
      <div className="absolute pin-t pin-r mt-2 mr-2">
        {twitter && (
          <SocialMediaLink
            href={`https://twitter.com/${twitter}`}
            color={color}
            icon="fab fa-twitter"
          />
        )}
        {blog && (
          <SocialMediaLink href={blog} color={color} icon="fas fa-blog" />
        )}
        {github && (
          <SocialMediaLink
            href={`https://github.com/${github}`}
            color={color}
            icon="fab fa-github"
          />
        )}
      </div>

      <div
        className={`mx-auto rounded-full bg-${color}-dark -mt-16 p-px`}
        style={{ width: 150, height: 150 }}
      >
        <Img fluid={file.childImageSharp.fluid} className="rounded-full" />
      </div>

      <div className="px-8">
        <div className={`text-center text-${color}-darker`}>
          <h2 className="text-lg my-2">{name}</h2>
          <span className="ml-4 text-sm opacity-75">{position}</span>
        </div>
        <p className={`text-${color}-darker text-sm tracking-wide font-serif`}>
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
      className={`hover:text-${color} mr-2 opacity-50`}
    >
      <i className={icon} />
    </a>
  );
}
