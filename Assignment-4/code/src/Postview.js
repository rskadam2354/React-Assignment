import React,{useState} from "react";
import {Nav,Container,Button,Row,Col, Navbar, Card} from "react-bootstrap";
import "./Postview.css";
import axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";


const Postview = () => {
  const [posts,setPost]=useState([]);
  
  React.useEffect(()=>{
    axios.get('http://localhost:3000/users').then(res=>{
      setPost(res.data);
    });
  },[]);
  
  return (
    <div className="site-container">
          <div className="page-header"style={{borderBlockEnd:"2px solid black",margin:"0 0.5em"}}>
            <Navbar bg="bg-white" variant="dark">
              <Container>
                <Navbar.Brand href="#"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="d-flex justify-content-end">
                  <Navbar.Text><img src="https://img.icons8.com/ios/50/000000/apple-camera.png" alt="camera"/></Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
      {posts.map((post,idx)=>{
        return(
            <div>
          <div className="post-container" >
          <Container key={idx} style={{marginTop:'20px',marginBottom:'20px'}}>
            <Row>
              <Col md={{span:6,offset:3}} style={{border:"1px solid grey",borderRadius:"5px",display:"flex",flexDirection:"column"}}>
                <Card.Header style={{display:"flex",flexDirection:"column",padding:"0",margin:"0",background:"white"}}>
                  <label className="d-flex justify-content-between">
                    <span><strong>{post.name}</strong><br></br>{post.location}</span> 
                    <span><strong>...</strong></span>
                  </label>
                </Card.Header>
                <Card.Body className="text-center">
                  <Card.Title width="100%">
                  <img src={post.PostImage+idx} className="img-fluid" width="100%"style={{margin:"0em",padding:"0em"}} alt="corresponding posts for index"idx/>
                  </Card.Title>
                <Card.Text className="d-flex bd-highlight mb-3">
                  <img className="p-2 bd-highlight" src="https://img.icons8.com/ios-glyphs/30/000000/like--v2.png" alt="..."/>
                  <img className="p-2 bd-highlight" src="https://img.icons8.com/windows/32/000000/filled-sent.png" alt="..."/>
                  <span className="ml-auto p-2 bd-highlight">{new Date(post.date).toLocaleDateString()}</span>
                  </Card.Text>
                  <Card.Text className="text-left">
                  {post.likes} likes
                </Card.Text>
                <Card.Footer style={{textAlign:"left",margin:'0px',background:"white",border:"none",padding:"0"}}>
                    {post.description}
                </Card.Footer>
                </Card.Body>
              </Col>
            </Row>
          </Container>
          </div>
      </div>
      )
    })}
    </div>
    
  )
}

export default Postview;
