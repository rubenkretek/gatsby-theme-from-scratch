const path = require('path');
const data = require('./data');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const portfolioItems = await graphql(`
        query getPorfolioItems {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                  }
                }
              }
        }
    `)

    portfolioItems.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve('./src/templates/Generic.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}