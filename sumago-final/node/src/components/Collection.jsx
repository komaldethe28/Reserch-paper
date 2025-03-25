import React from 'react';
import { useState } from 'react';
// import {
//   Form,
//   Button,
//   FormGroup,
//   FormControl,
//   Col,
//   Row,
//  FormLabel,
// } from 'react-bootstrap';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
    // MDBSelect
  }
  from 'mdb-react-ui-kit';
  import { useNavigate } from 'react-router-dom';

const Collection = () => {
    const [facultyname, setFaculty] = useState('');
  var username=localStorage.getItem('user');
    const [titleOfPR, setTitle] = useState('');
    // const[username,setEmail]=useState('');
    const [PIN,setPIN]=useState('');
    const[paper,setPaper]=useState('');
    const [dateOfPublication, setDOF] = useState('');
    const [dept, setDepartment] = useState('');
    const [journalName, setJournalName] = useState('');
    const [levelOfPublication, setLevelOfPublication] = useState('');
    const [typeOfPublication, setTypeOFPublication] = useState('');
    
    const navigate = useNavigate();
    const handleRegistration = async () => {

        if (!facultyname.trim() ||!paper.trim()|| !titleOfPR.trim()|| !dept.trim()|| !journalName.trim()|| !levelOfPublication.trim()|| !PIN.trim() || !typeOfPublication.trim()) {
          alert('Please fill in all fields');
          return;
        }

  const response = await fetch('http://localhost:8000/api/paper', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, facultyname, titleOfPR, dateOfPublication, dept, journalName,  PIN, typeOfPublication, levelOfPublication }),
  });

if(response.ok){
    console.log("Paper data created successfully... Congratulations")
    alert("paper data Created Succesfully");
    navigate('/Home');
  }else{
    console.log("Something went wrong.. could not be able to create  Paper data ")
  }



};
//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

  return (
    <>
    <MDBContainer fluid className='bg-dark'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol>

    <MDBCard className='my-4'>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5 text-uppercase fw-bold">Paper Data Collection form</h3>

            <MDBInput wrapperClass='mb-4' label='Faculty Name' size='lg' id='form6' type='text' onChange={(e)=>setFaculty(e.target.value)}/>
            {/* <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form7' type='email' onChange={(e)=>setEmail(e.target.value)}/> */}
            
            <MDBInput wrapperClass='mb-4' label='Title of PR' size='lg' id='form3' type='text' onChange={(e)=>setTitle(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Date of paper Pubalication' size='lg' id='form6' type='date' onChange={(e)=>setDOF(e.target.value)}/>
        
            <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h6 class=" mb-0 me-4">Department: </h6>
              <MDBRadio name='deptRadio' id='inlineRadio1' value='option1' label='Comp' inline onChange={() => setDepartment('Comp')}/>
              <MDBRadio name='deptRadio' id='inlineRadio2' value='option2' label='IT' inline onChange={() => setDepartment('IT')}/>
              <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Mech' inline onChange={() => setDepartment('Mech')}/>
              <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Civil' inline onChange={() => setDepartment('Civil')}/>
              <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='E & TC' inline onChange={() => setDepartment('E & TC')}/>
              <MDBRadio name='deptRadio' id='inlineRadio3' value='option3' label='Electronics' inline onChange={() => setDepartment('Electronics')}/>
            </div>
            <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h6 class=" mb-0 me-4">Type Of Publication: </h6>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Journal Article' inline onChange={() => setTypeOFPublication('Journal Artical')}/>
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Conference Paper' inline onChange={() => setTypeOFPublication('Conference Paper')}/>
              <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Book Chapter' inline onChange={() => setTypeOFPublication('Book Chapter')}/>
            </div>
            
            <MDBInput wrapperClass='mb-4' label='Paper Description' size='lg' id='form3' type='text' onChange={(e)=>setPaper(e.target.value)}/>
           
            <MDBInput wrapperClass='mb-4' label='Paper Identification number ' size='lg' id='form4' type='text' onChange={(e)=>setPIN(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Level Of Publication' size='lg' id='form5' type='text' onChange={(e)=>setLevelOfPublication(e.target.value)}/>
           
            <MDBInput wrapperClass='mb-4' label='Journal Name' size='lg' id='form6' type='text' onChange={(e)=>setJournalName(e.target.value)}/>
           

            <div className="d-flex justify-content-end pt-3">
              <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
              <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleRegistration}>Submit form</MDBBtn>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
</>
);
}

export default Collection;