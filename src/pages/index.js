import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroImage from "../components/hero-image";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="flex items-center">
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
        <div className="flex-1">
          <HeroImage />
        </div>
      </div>
    </Layout>
  );
}
