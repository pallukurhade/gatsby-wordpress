import React from 'react';
import loadable from '@loadable/component';
import { graphql } from 'gatsby';
const PrimaryLayout = loadable(() => import('../layouts/PrimaryLayout'));
const Post = loadable(() => import('../components/Post'));



export default ({data}) => {
  console.log(data);
  return (
  <PrimaryLayout column="col-xs-6">
 
    {data.allWpPost.nodes.map(node => (
       <Post 
       image = {node.featuredImage.node.mediaItemUrl}
       alt= {node.featuredImage.node.slug}
       title={node.title} 
       excerpt={node.excerpt}
       readMore={node.slug}
       />
    ))}
    
  </PrimaryLayout>
  )
}

  export const query = graphql`
  { 
    allWpPost {
          nodes {
            title
            excerpt
            slug
            featuredImage {
              node {
                mediaItemUrl
                slug
              }
            }
          }
        }
      }
    
  
  `
