import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const ContactPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const newContact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    const response = await fetch(
      "https://http-request-30a26-default-rtdb.firebaseio.com/ContactUs.json",
      {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    console.log(data);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <React.Fragment>
      <Form onSubmit={submitHandler} className="container col-6">
      <h3 className="text-center" style={{fontFamily: 'Climate Crisis'}}>Contact Us</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            ref={emailRef}
          />
           <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            ref={phoneRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 btn-lg">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default ContactPage;
