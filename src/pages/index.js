import React, { lazy } from 'react';
const PrimaryLayout = lazy(() => import('../layouts/PrimaryLayout'));
const Post = lazy(() => import('../components/Post'));

import { graphql } from 'gatsby';

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
