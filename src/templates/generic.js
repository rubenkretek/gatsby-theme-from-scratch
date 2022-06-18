import React from 'react'
import { graphql } from 'gatsby';

export const generic = ({ data }) => {

    const pageData = data.markdownRemark.frontmatter;
    console.log(pageData);
    

    return (
        <div>
            <h1>{pageData.title}</h1>
        </div>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: {eq: $slug }}) {
            frontmatter {
                slug
                title
                description
            }
        }
    }
  
`

export default generic;
