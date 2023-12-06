import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Delete =()=>{
   const [student,setstudent] = useState({})
      const navigate = useNavigate();
       const {studentId} = useParams();
       async function fetchData(){
        const result = await
        axios.get(`http://localhost:8080/students/get/${studentId}`)
        setstudent(result.data[0])
       }

       useEffect(()=>{
        fetchData()
       },[])

       function deletestudent(){
        axios.delete(`http://localhost:8080/students/delete/${studentId}`);
        navigate('/showuser')
       }

    return(
        <>
        <div>
            <h2>Delete Student Data</h2>
            <form onSubmit={()=>deletestudent ()} >
                <h2>Do you want to delete data of <span style={{color:"red"}} >{student.name}</span></h2>
                <center>
                    <input type="submit" value='yes' />
                    <NavLink to={'/showuser'} ><button type="button" >No</button></NavLink>
                </center>
            </form>
        </div>
        </>
    )
}
export default Delete;