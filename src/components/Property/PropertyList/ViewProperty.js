import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { Form,Input,Select,Space } from 'antd';

import "./viewproperty.css";
import {Modal} from 'antd'

const FORM_ENDPOINT = "";

function ViewProperty() {
  const [submitted, setSubmitted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="container mt-2">
        <div className="d-flex justify-content-between ">
          <div>

          <h1 className="card-title">House Fore Rent In New Baneshwor</h1>
          <p className="card-text">New Baneshwor,Kathmandu</p>
          </div>
          <div>
            <Button onClick={showModal} className="mt-2 btn-danger">Book Now</Button>
          </div>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form>
              hi
              

            </form>
          
          </Modal >
          
       


        </div>
        <div className="row g-1 ">
          <div className="col-8">
            <img src="assets/images/house1.jpg"></img>
          </div>
          <div className="col ">
            <div className="row ">
              <img src="assets/images/house2.jpg"></img>
            </div>
            <div className="row">
              <img src="assets/images/house3.jpg"></img>
            </div>
          </div>
        </div>
        <div className="row gx-1">
          <div className="col">
            <img src="assets/images/house4.jpg"></img>
          </div>
          <div className="col">
            <img src="assets/images/house5.jpg"></img>
          </div>
          <div className="col">
            <img src="assets/images/house6.jpg"></img>
          </div>
        </div>
      </div>
      <div className="row container card-container">
        <div className="col-8 card1">
          <Card>
            <Card.Body>
              <p>
                Property ID:<span>None</span>
              </p>

              <hr></hr>
              <h1> Description </h1>
              <p>
                A huge spacious flat is for RENT in Pokhara, near Davis Fall.
                It’s a very good opportunity and should not miss if you are
                looking for a nice flat in Pokhara for rent. The flat is on
                GROUND FLOOR of 3 story bungalow. The house owner occupies the
                1st and 2nd floors.
              </p>
              <ul>
                <li>2 Big Attached Bedrooms</li>
                <li>2 Family Bedrooms</li>
                <li>1 Big Living Room</li>
                <li>1 Kitchen</li>
                <li>1 Dinning</li>
                <li>Parking facility for car and bike</li>
                <li>Luxury carpet, lighting, and fresh paint</li>
              </ul>
              <p>
                Location: When go from Birauta to Chhorepatan it’s on right
                before Davis Fall downhill (बिरौटाको ओरालोमा)
              </p>
              <p>Rent:Rs 32,000 per month</p>
            </Card.Body>
          </Card>
        </div>
        <div className="col ml-2">
          <Card>
            <Card.Body>
              <img src="/assets/images/sharon.jpeg" />
              <h1>Sharon Shakya</h1>
              <p>Mobile:9812344426</p>
              <p>Email:richoo234@gmail.com</p>
              <form className="form-group">
                <label className="mb-2">Name</label>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                  category="small"
                />
                <label className="mb-2">Email</label>
                <input
                  className="form-control  mb-3"
                  type="email"
                  name="email"
                />
                <label className="mb-2">Phone Number</label>

                <input
                  className="form-control"
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  category="small"
                />

                <button className=" button-design" type="submit">
                  Send Message
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h1>Similar Properties</h1>
          <div className="row g-0">
            <div className="col-4">
              <Col className="mr-5">
                <Link to="/propertylist" className="link">
                  <Card className="card-hover">
                    <Card.Img variant="top" src="/assets/images/house6.jpg" />

                    <Card.Body>
                      <h5 className="card-title">Beautiful house</h5>
                      <p className="card-text">preety house</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </div>
            <div className="col-4">
              <Col className="mr-5">
                <Link to="/propertylist" className="link">
                  <Card className="card-hover">
                    <Card.Img variant="top" src="/assets/images/house6.jpg" />

                    <Card.Body>
                      <h5 className="card-title">Beautiful house</h5>
                      <p className="card-text">preety house</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </div>
            
          </div>
        </div>
        <Card className="card-design" >
            <h1>Leave a Reply</h1>
            <p>Your email address will not be published.
            Required fields are marked *</p>

        <form
          
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="mb-3 pt-0">
              <label>Name*</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
          <label>Email*</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
          <label>Comment*</label>
            <textarea
              placeholder="Your message"
              rows="10" cols="50"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
        </Card>
      </div>
    </div>
  );
}
export default ViewProperty;
