import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';
import { graphql } from 'gatsby';

export default ({data}) => {
  console.log(data);
  return (
  <PrimaryLayout column="col-xs-6">
 
    {data.allWpPost.nodes.map(node => (
       <Post 
       image = {node.featuredImage.node.mediaItemUrl || 'https://methepallavi.com/wp-content/uploads/2021/02/Eslint-Prettier-Create-React-App-2019-Cover.png'}
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
