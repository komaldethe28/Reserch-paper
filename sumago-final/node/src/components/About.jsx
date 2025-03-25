import React from 'react'
import Header from './Header';
import picture from '../aboutus2.jpeg';
import Footer from './Footer';
const About=()=> {
  return (
    
   <> 
   <Header/>
   
   <img src={picture} width={"100%"} height={"500px"} alt=""/><br></br>
   <div className='paragraph'>
    <p>We understand the critical role faculty play in driving innovation and shaping tomorrow's world. But managing research outputs, citations, and impact can be a time-consuming challenge. That's where we come in.We are the creators of <u>WEB APPLICATION TO COLLECT THE DATA OF PAPERS PUBLISHED BY FACULTY MEMBERS </u>, a revolutionary web application designed to empower faculty members and simplify the process of recording and showcasing their published research.<br></br>
    <br></br>
   <b>Our Mission:</b><br></br>
   <ul>
    <li><b>Reduce administrative burden:</b> Eliminate tedious paperwork and manual data entry.</li><br></br>
    <li><b>Increase data accuracy:</b> Ensure your research record is complete and consistently formatted.</li><br></br>
    <li><b>Optimize discovery:</b> Showcase your work to the world, making it easier for researchers, collaborators, and funding agencies to find it.</li><br></br>
    <li><b>Enhance impact:</b> Gain valuable insights into your research reach and influence.</li><br></br>
   </ul>

   <b>Here's how we achieve it:</b><br></br>
   <ul>
    <li><b>Intuitive interface:</b> Our user-friendly platform makes it easy to submit your publications, even for those with limited technical expertise.</li><br></br>
    <li><b>Automated data extraction:</b> We integrate with leading academic databases to automatically import publication details, saving you precious time.</li><br></br>
    <li><b>Customization:</b> Tailor your profile to highlight your areas of expertise and showcase your accomplishments.</li><br></br>
    <li><b>Real-time analytics:</b> Track your research impact through detailed reports and visualizations.</li><br></br>
    <li><b>Collaboration tools:</b> Connect with colleagues and co-authors to streamline data sharing and reporting.</li><br></br>
     </ul><br></br></p>
     <h2><b>Join us on our mission to revolutionize research visibility and recognition.</b></h2>
     </div>
     <Footer/>
</>
  
  )
}

export default About