import { useState } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
function Updating() {
  const [validated, setValidated] = useState(false);
  const [name,setname]=useState('')
  const [pass,setpass]=useState('')
  const [email,setemail]=useState('')
  const handleSubmit = (event) => {
    
    const setdata=
    {
        name:name,
        email:email,
        pass:pass,
    }
    axios.put("http://localhost:8000/abc/update/email",setdata)
    .then(res=>
        {
            console.log(res.data)
            setdata(res.data.userdata)

        })
    .catch((err)=>
    {
        console.log();
    })

    setValidated(true);
  };

  return (
    <Container>
        <row>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="password"
            value={pass}
            onChange={(e)=>setpass(e.target.value)}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={email}
            onChange={(e)=>setemail(e.target.value)}

            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Button type="submit">Submit form</Button>
    </Form>
    </row>
    </Container>
  );
}

export default Updating;