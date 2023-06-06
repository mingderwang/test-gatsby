import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box, Heading, Link } from "theme-ui";
import Layout from "../components/layout";

export default function IndexPage({ data }) {
  return (
    <>
      <Layout>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <button class="btn">Button</button>
        <button class="btn btn-link"> Link </button>
        {data.allMdx &&
          data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
            <Box
              key={id}
              as="article"
              sx={{
                mb: 4,
                p: 3,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                border: "1px solid #d1d1d1",
                borderRadius: "15px",
              }}
            >
              <Link as={GatsbyLink} to={`/${slug}`}>
                <Heading>{frontmatter.title}</Heading>
                <Box as="p" variant="styles.p">
                  {frontmatter.date}
                </Box>
                <Box as="p" variant="styles.p">
                  {excerpt}
                </Box>
              </Link>
            </Box>
          ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`;
