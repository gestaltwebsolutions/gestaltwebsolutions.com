import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroImage from "../components/hero-image";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        description={`
        We are technology consultants skilled in building a solutions for
        businesses and private projects using the latest web technologies.
      `}
        keywords={[
          `software`,
          `consultants`,
          `websites`,
          `database`,
          `applications`,
          `development`,
          `engineers`
        ]}
      />
      <div className="block md:flex items-center">
        <div className="flex-1">
          <h1 className="text-5xl">
            Bringing the <span className="text-teal font-bold">web</span> to you
          </h1>
          <h2 className="text-4xl">
            We build world-class <span className="text-teal">websites</span>,{" "}
            <span className="text-teal">applications</span>, and{" "}
            <span className="text-teal">tools</span>
          </h2>
          <div className="text-center">
            <Link to="/services" className="btn">
              Our Services
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </Layout>
  );
}
