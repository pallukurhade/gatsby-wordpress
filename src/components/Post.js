import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = (props) => (
  <post>
   <div className="p-3"> 
    <Card>
    <Card.Img width="125" height="125" variant="top" src={props.image} alt={props.alt || "Default"} />
    <Card.Body>
      <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
      <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}} />
     
      <Button variant="warning" href={props.readMore}>Read More...</Button>
    </Card.Body>
  </Card>
  </div>
  </post>
);

export default Post;