import axios from "axios";
import { useEffect, useState } from "react";
import '../images/bg.jpg';
import { NavLink } from "react-router-dom";
const Showuser =()=>{
     const [student,setstudent] = useState([]);
     async function fetchData (){
        const result = await
        axios.get("  http://localhost:8080/students");
        console.log(result.data);
        setstudent(result.data);
     }
     useEffect(()=>{
        fetchData();
     },[])
    return(
        <>
        <h1>show user</h1>
        <table class="table">
  <thead>
    <tr>
   
      <th scope="col">Roll</th>
      <th scope="col">Name</th>
      <th scope="col">Mark</th>
      <th scope="col">Gender</th>
      <th scope="col">City</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
     
    </tr>
  </thead>
  <tbody class="table-group-divider">
{
    student.map(obj=>{
        return(
            <tr key={obj.id}>
                
                <td>{obj.roll}</td>
                <td>{obj.name}</td>
                <td>{obj.mark}</td>
                <td>{obj.gender}</td>
                <td>{obj.city}</td>
               <td> <NavLink to={`/updateuser/${obj.id}`} > <button  class="btn btn-primary">Update</button></NavLink> </td>
<td> <NavLink to={`/delete/${obj.id}`} ><button type="button" class="btn btn-secondary">Delete</button></NavLink> </td>
            </tr>
        )
    })
}


  </tbody>
</table>
        </>
    )
}
export default Showuser;