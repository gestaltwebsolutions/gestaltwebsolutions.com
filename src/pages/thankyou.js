import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "../components/thank-you";

export default function ThankYou() {
  return (
    <Layout>
      <SEO title="Thank You" />
      <h1 className="hidden">Thank You</h1> {/* For Accessibility */}
      <div className="mx-auto mt-8" style={{ width: 600 }}>
        <Img />
        <h2 className="text-center font-serif text-lg px-16 z-10">
          <p>
            We have received your <span className="text-teal">message</span> and
            will send a reply before long.
          </p>

          <Link className="btn" to="/">
            Home
          </Link>
        </h2>
      </div>
    </Layout>
  );
}
