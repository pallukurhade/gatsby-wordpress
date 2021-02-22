import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import innerText from 'react-innertext';

const BlogpostLayout = ({data}) => {
   const post = data.wpPost; 
   return (
    <div>
    <SEO 
      title= {innerText(post.title)}
      description= {innerText(post.excerpt)}
      image = {post.featuredImage.node.sourceUrl}
      keywords = {post.categories.nodes.map(result => result.name).join(',')}
    />
    <Header />
     <div className="container">
       <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
            <div dangerouslySetInnerHTML={{__html: post.content}}/>
        </div>
      </div>
     <Footer/>
     </div>
)};

export default BlogpostLayout;

export const query = graphql `
query($slug: String!){
 wpPost (slug: {eq: $slug}){
    content
    title
    featuredImage {
       node {
        sourceUrl
      }
    }
    categories {
      nodes {
         name
      }
    }

  }
}`