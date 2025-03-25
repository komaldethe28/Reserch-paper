import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

  const Userdata = () => {
    const Navigate=useNavigate;
    const [data,setdata]=useState([]);
    console.log(data)
    useEffect(()=>{
        axios.get("http://localhost:8000/abc/findall")
        .then(res=> {
            console.log(res.data)
            setdata(res.data.userdata)
        }
        )
        .catch(err=>{
            console.log(err);
        }
        )
    },[])
    function handledelete(email)
    {
      axios.get('http://localhost:8000/abc/delete/${email}')
      .then(res=> {
          console.log(res.data)
          setdata(prevData=>prevData.filter(item=> item.email !== email));
      }
      )
      .catch(err=>{
        console.log(err);
    }
    )
    }

  return (
    
    <div>
        <table>
        <br/>

            <tr>
            <th>Name</th>
            <th>Email</th> 
            <th>PassWord</th>
            </tr>
            {
              data.map((a)=>
              {
                return(
                      <>
                    
                  <tr>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.pass}</td>
                  <td><Button onClick={()=>{Navigate('/abc')}}>Update</Button></td>
                  <td><Button onCLick={()=>{handledelete(a.email)}}>Delete</Button></td>
                  </tr>
                      </>
                      
                  )
              }
              
              )
        
        }
            
            
           
        </table>
    </div>
  )
}

export default Userdata;