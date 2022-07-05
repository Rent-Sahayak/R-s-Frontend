import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Sidebar";
import Navbar from "../../../Navbar/Navbar";

import "./ProfileScreen.css";
import { createRef } from "react";
import { apiAuthGetUser, apiUserProfile, apiUserUpdateProfile } from "../../../../ApiService/AuthApi";


const ProfileScreen = () => {
  const [fullName, setName] = useState("");
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
  useEffect(()=>{
    const fetchUser=async()=>{
      console.log("hi")
      try{
        const res =await apiUserProfile();
       
        if(res){
          setName(res.data.data.profile.fullName)
          setEmail(res.data.data.email)
          setAddress(res.data.data.profile.address)
          setPhone(res.data.data.profile.phone)
        }

      }
      catch(e){
        console.log(e)
      }
    };
    fetchUser()
  },[])
  const handleSubmit=(async(e)=>{
    e.preventDefault()
    try{
      const res=await apiUserUpdateProfile({fullName:fullName,address:address,phone:phone})
      if(res){
        setName(res.data.data.profile.fullName)
        setEmail(res.data.data.email)
        setAddress(res.data.data.profile.address)
        setPhone(res.data.data.profile.phone)
      }
      
    }
    catch(e){
      console.log(e)
    }

  })
  return (
    <div >
      <div>
        <Navbar/>    
        <Sidebar/>       
        <Row  className="profileContainer">
          <Col md={6}>
            <p className="ml-24"><span>Welcome</span> {email}</p>
            <Form className="form-design" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
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
              <div className="form-group d-flex ">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Male
                </label>
                
            
              </div>
              <div class="form-check ml-3" >
                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Female
                </label>
            
              </div>
            </div>
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