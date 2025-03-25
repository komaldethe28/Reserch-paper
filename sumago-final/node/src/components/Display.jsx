import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
const Display = () => {

    const navigate =useNavigate()

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/papers")
            .then(res => {
                console.log(res.data);
                setdata(res.data)
            })

            .catch(err => {
                console.log(err);
            })
    }, [])

    


    return (
        <div>

            <>
                <div>
                <center><h2>Research Paper Information</h2></center>
                <Table striped bordered hover>
                        <tr>
                            <th>Faculty name</th>
                            <th>Faculty Department</th>
                            <th>Paper Title</th>
                            <th>Journal name</th>
                            <th>Publication Date</th>
                            
                            <th>Type of publication</th>
                            <th>Level of publication</th>
                        </tr>
                        {
                            data.map((a) => {
                                return (
                                    <tr>
                                         <td>{a.facultyname}</td>
                                        <td>{a.dept}</td>
                                        <td>{a.titleOfPR}</td>
                                        <td>{a.journalName}</td>
                                        <td>{a.dateOfPublication}</td>
                                        <td>{a.typeOfPublication}</td>
                                        <td>{a.levelOfPublication}</td>
                                    </tr>
                                         )
                                        })
                                    }
                                    
                                </Table>
                            </div>
                        </>
            
                    </div>
                )
            }
                            
                            
                            



export default Display;