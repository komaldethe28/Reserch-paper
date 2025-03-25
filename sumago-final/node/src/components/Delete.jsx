import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
const Delete = () => {
    const [PIN,setPIN]=useState('');
    const [papers,setPapers] = useState('');
    const[selectedPaper,setSelectedPaper]=useState('');
    const navigate=useNavigate();
    useEffect(() => {
        // Fetch patents from your API endpoint
        fetch('http://localhost:8000/api/papers')
          .then((response) => response.json())
          .then((data) => setPapers(data))
          .catch((error) => console.error('Error fetching papers:', error));
      }, []);
    const handleDeletePaper = async (PIN) => {
        try {
          const response = await fetch(`http://localhost:8000/api/papers/${PIN}`, {
            method: 'DELETE'
          });
    
          if (response.ok) {
            console.log('Paper deleted successfully!');
          
            fetch('/api/papers')
              .then((response) => response.json())
              .then((data) => setPapers(data))
              .catch((error) => console.error('Error fetching papers:', error));
            console.log("deleted paper");
            navigate('/Home');
          } else {
            alert("You cannot delete paper filed by other users!!")
            console.error('Error deleting paper:', response.statusText);
          }
        } catch (error) {
          console.error('Error deleting paper:', error);
        }
      };
  return (
    <div>
      
      <form>
      <h1>Enter the paper Identification number</h1>
        <input type="text" name='text' placeholder='Enter PIN' onChange={(e)=>setPIN(e.target.value)}/>
        <Button variant="danger" onClick={() => handleDeletePaper(selectedPaper.PIN)}>Delete</Button>
      </form>
    </div>
  )
}

export default Delete;