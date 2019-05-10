import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function About() {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>

      <div className="w-1/2 mx-auto rounded-b-lg border-t-2 border-orange-dark bg-grey-lighter py-4 px-32">
        <form
          name="contact"
          action="/thankyou"
          method="POST"
          data-netlify="true"
          netlify-honeypot="email_address"
        >
          <Field label="Name">
            <input
              name="name"
              type="text"
              className="input"
              autoFocus
              required
            />
          </Field>

          <Field label="Email">
            <input name="email" type="email" className="input" required />
          </Field>

          <Field label="Message">
            <textarea name="message" className="input" rows="5" required />
          </Field>

          <p className="hidden">
            Ignore Me: <input name="email_address" type="email" />
          </p>

          <div className="text-right">
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

function Field({ label, children }) {
  return (
    <p>
      <label className="block text-sm">{label}</label>
      {children}
    </p>
  );
}
