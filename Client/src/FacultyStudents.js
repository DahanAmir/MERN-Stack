import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

import logo from './logo.svg';
import axios from 'axios'


function FacultyStudentsComp(props) {

  //instead of : props.match.params.studentid  
  const {studentid} = useParams()

  const [otherStudents, setOtherstudents] =useState([])

  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/students");
    let students = resp.data;

    //Find student's faculty
    let s = students.find(x => x._id == studentid );
    let faculty = s.faculty

    //Find ALL students in the same faculty besides the selected one
    let otherS = students.filter(x => x.faculty == faculty && x._id != studentid)

    setOtherstudents(otherS)

  },[])

  return (
    <div className="App">
     <h3>Other students in faculty : </h3>

      <table border="1">
        {
          otherStudents.map(item =>
            {
              return <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.faculty}</td>
              </tr>
            })
        }
      </table>
    
    </div>
  );
}

export default FacultyStudentsComp;
