import "./UpdateUser.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const UpdateUser = () => {

    const {id} = useParams();
   const navigate=useNavigate();


     const [formData, setformData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setformData ({
          ...formData,
          [name]: value,
        });
      };

      useEffect(() => {
        const fetchEmployee = async() => {
        try {
            const response = await fetch(`http://localhost:8081/api/employees/${id}`);
            const data = await response.json(); 
            setformData(data);
        } catch (error) {
            console.error("Error fetching employee:", error.message);
        }

      }
        fetchEmployee();

    },[id]);


    const handleSubmit = async (e) =>{
       e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8081/api/employees/${id}`,{
                method : "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Employee Updated Successfully:", data);
            navigate("/"); // Navigate back to the main employee list page
        } catch (error) {
            console.error("Error updating employee:", error.message);
        }
    }


    return(
            <>
      <div className="center-form">
        <h1> Edit Employee</h1>

        <form onSubmit={handleSubmit}>

          {/* ✅ NAME */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
            value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ EMAIL */}
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ PHONE */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="phone"
               value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* ✅ DEPARTMENT */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="submit" className="btn btn-primary"> Edit Employee</Button>

        </form>
      </div>
    </>
    )

}

export default UpdateUser;