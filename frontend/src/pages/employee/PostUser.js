import "./PostUser.css";
import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const PostUser = () => {

  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setformData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate=useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        const response = await fetch("http://localhost:8081/api/employees",{
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

       const data = await response.json(); 
        console.log(" Employee Created Successfully:", data);
        navigate("/")
    } catch (error) {
        console.error("Error creating employee:", error.message);
        
    }
 }

  return (
    <>
      <div className="center-form">
        <h1>Post New Employee</h1>

        <form onSubmit={handleSubmit}>

          {/* ✅ NAME */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ EMAIL */}
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ PHONE */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter Phone"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ DEPARTMENT */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="department"
              placeholder="Enter Department"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="submit" className="btn btn-primary">Submit</Button>

        </form>
      </div>
    </>
  );
};

export default PostUser;
