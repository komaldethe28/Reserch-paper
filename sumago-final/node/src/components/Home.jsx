import React from 'react'
import Image from 'react-bootstrap/Image';
import img1 from '../ppr.jpeg';
import Header from './Header';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Header/>
      <Image src={img1} width={'100%'} fluid />
      <Footer/>
    </div>
  )
}

export default Home;
