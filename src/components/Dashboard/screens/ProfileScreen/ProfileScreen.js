import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Sidebar";
import Navbar from "../../../Navbar/Navbar";

import "./ProfileScreen.css";
import { createRef } from "react";


const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formFile, setFormFile] = useState(null);
  const [pic,setPic]=useState("");
  const [picMesage,setPicMessage]=useState("");
  const [address, setAddress] = useState("");
  const [phone,setPhone]=useState("");
  const imageRef = createRef();
  const handleFileChange = (e) => {
    e.preventDefault();
    const { files } = e.target;
    files && files.length > 0 && setFormFile(files[0]);
    if (imageRef && files) {
      const newSrc = URL.createObjectURL(files[0]);
      imageRef.current?.setAttribute("src", newSrc);
    }
  };
  
  return (
    <div >
      <div>
        <Navbar/>    
        <Sidebar/>       
        <Row  className="profileContainer">
          <Col md={6}>
            <Form className="form-design">
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  type="number"
                  
                  placeholder="PhoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              <div className="form-group">
              <Form.Group controlId="pic">
              <Form.Label>Upload profile picture</Form.Label>
              <Form.Control
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={handleFileChange}
              />
              </Form.Group>
            </div>
              <Button type="submit" varient="primary">
                Update
              </Button>
             

            </Form>
            </Col>
           <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </Col>
         
          
        </Row>
        
      </div>
    </div>
  );
};

export default ProfileScreen;