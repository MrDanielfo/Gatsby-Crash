import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map( post => (
         <>
          <div style={{margin: "2rem"}} key={post.node.id}>
               <h3>{post.node.frontmatter.title}</h3>
               <small>Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
               <Link style={{margin: "1rem"}} to={post.node.frontmatter.path}>Go to post</Link>
          </div>
          <hr />
         </>
     )
    )}
  </Layout>
)

export const pageQuery = graphql`
     query BlogIndexQuery {
          allMarkdownRemark {
               edges {
                 node {
                   id
                   frontmatter {
                     path
                     title
                     date
                     author
                   }
                 }
               }
             }
     }
`



export default BlogPage
