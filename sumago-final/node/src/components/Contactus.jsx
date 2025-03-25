import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';



const Contactus = () => {
  return (
    <div>
      <Header/>
      
    
    <section className='border text-center mb-4'>
      <h1 className='mb-5'>Contact us</h1>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.310520845654!2d74.18287627504169!3d19.614017981704475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd0070e7eb3683%3A0x812069ad0d4f7f8f!2sAmrutvahini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1704084916562!5m2!1sen!2sin"
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='col-lg-7'>
          <form>
            <div className='row'>
              <div className='col-md-9'>
                <MDBRow className='mb-4'>
                  
                  <MDBCol>
                    <MDBInput label='Email Address' id='form3Email' />
                  </MDBCol>
                </MDBRow>
                
                  
                
                <MDBTextArea label='Feedback' id='form3Textarea' wrapperClass='mb-4' />
                <MDBBtn color='primary' className='mb-4'>
                  {' '}
                  Send{' '}
                </MDBBtn>
              </div>
              <div className='col-md-3'>
                <ul className='list-unstyled'>
                  <li>
                  <IoLocation />
                    <p>
                      <small>Near Pune Nashik Highway, Ahmed Nagar, Sangamner, Maharashtra 422608.
                    </small>
                    </p>
                  </li>
                  <li>
                  <FaPhoneVolume />
                    <p>
                      <small>02425 259 017</small>
                    </p>
                  </li>
                  <li>
                  <IoMdMail />
                    <p>
                      <small>principal@avcoe.org</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Contactus






