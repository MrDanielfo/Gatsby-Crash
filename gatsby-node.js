const path = require('path');

exports.createPages = async ({ boundActionCreators, graphql }) => {
     const { createPage } = boundActionCreators

     const postTemplate = path.resolve('src/templates/blog-post.js'); 
     const data = await graphql(`
          {
               allMarkdownRemark {
                    edges {
                      node {
                        html
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
     `);

     if(data.errors) {
          console.log(data.errors)
     }

     return data.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
               path: node.frontmatter.path,
               component: postTemplate
          })
     });
}