import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Services() {
  const wrap = (
    <div className="absolute pin-x bg-blue-darkest text-blue-lightest font-sans px-20 py-4">
      <div className="w-1/2 mx-auto">
        <h1 className="text-xl my-0">Services</h1>
        Let us worry about the technology so that you can focus on your business
        or project idea.
      </div>
    </div>
  );

  return (
    <Layout wrap={wrap}>
      <SEO
        title="Services"
        description={`
          We are software consultants who build websites, applications,
          databases, and more.
          `}
        keywords={[
          `websites`,
          `consultants`,
          `database`,
          `applications`,
          `development`,
          `automation`,
          `testing`,
          `code`,
          `deployments`
        ]}
      />

      <div className="my-32">
        <div className="flex justify-around">
          <Service title="Software Consultants" icon="users" color="teal">
            <p>
              Bring us in to start your newest project, or to get an existing
              project across the finish line.
            </p>
            <ul className="list-reset my-2">
              <ListItem>Application Development</ListItem>
              <ListItem>Code Reviews/Cleanup</ListItem>
              <ListItem>Testing Automation</ListItem>
              <ListItem>Continuous Deployments</ListItem>
            </ul>
          </Service>
          <Service
            title="Website Development"
            icon="globe"
            color="indigo"
            primary
          >
            <p>
              Need a website for your business or other project? We can design a
              site using the latest web technologies.
            </p>
            <ul className="list-reset my-2">
              <ListItem>Responsive Layouts</ListItem>
              <ListItem>Interactive Applications</ListItem>
              <ListItem>Data-Generated Templates</ListItem>
              <ListItem>Search Engine Optimization</ListItem>
            </ul>
          </Service>
          <Service
            title="Data Collection Services"
            icon="database"
            color="orange"
          >
            <p>
              We can help you get data into your system, or create queries and
              an API to get your data where it needs to go.
            </p>
            <ul className="list-reset my-2">
              <ListItem>Database Design</ListItem>
              <ListItem>Query Optimizations</ListItem>
              <ListItem>Source Data Harvesting</ListItem>
              <ListItem>API Development</ListItem>
            </ul>
          </Service>
        </div>
      </div>
    </Layout>
  );
}

function ListItem({ children }) {
  return (
    <li>
      <i className="fas fa-certificate" /> {children}
    </li>
  );
}

function Service({ title, icon, color, children, primary }) {
  return (
    <div
      className={`w-1/4 relative shadow-lg rounded-lg ${
        primary ? "bg-grey-lightest" : "bg-grey-lighter"
      }`}
    >
      <div className="p-4 pb-16">
        <div
          className={`mx-auto w-10 bg-${color} rounded-full p-2 -mt-8 mb-2 text-white text-center`}
        >
          <i className={`fas fa-${icon}`} />
        </div>

        <h2 className={`text-center mb-2 text-${color}-darker`}>{title}</h2>

        <div className="font-serif text-jusify text-sm">{children}</div>
      </div>

      <div
        className={`absolute pin-x rounded-b pin-b text-center font-bold bg-${color}-darkest text-${color}-lightest`}
      >
        <Link
          to="/contact"
          className="block tracking-wide py-2"
          style={{ textTransform: "uppercase" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
